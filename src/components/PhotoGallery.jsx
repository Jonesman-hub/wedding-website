// PhotoGallery.jsx
import React, { useState, useCallback, useEffect } from 'react';
import { Upload, Move } from 'lucide-react';
import { supabase } from '../supabase';

const PhotoGallery = ({ currentLang = 'en' }) => {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [layout, setLayout] = useState('grid');

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const { data, error } = await supabase
        .from('photos')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setImages(data || []);
    } catch (error) {
      console.error('Error fetching images:', error.message);
    }
  };

  const uploadImage = async (file) => {
    try {
      setUploading(true);

      // Upload to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('wedding-photos')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get the public URL
      const { data: { publicUrl } } = supabase.storage
        .from('wedding-photos')
        .getPublicUrl(filePath);

      // Save to photos table
      const { data, error: dbError } = await supabase
        .from('photos')
        .insert([
          {
            url: publicUrl,
            name: file.name
          }
        ]);

      if (dbError) throw dbError;

      // Refresh the image list
      fetchImages();
    } catch (error) {
      console.error('Error uploading image:', error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = useCallback(async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = [...e.dataTransfer.files];
    if (files && files.length > 0) {
      const imageFiles = files.filter(file => file.type.startsWith('image/'));
      for (const file of imageFiles) {
        await uploadImage(file);
      }
    }
  }, []);

  const handleFileInput = useCallback(async (e) => {
    const files = [...e.target.files];
    if (files && files.length > 0) {
      const imageFiles = files.filter(file => file.type.startsWith('image/'));
      for (const file of imageFiles) {
        await uploadImage(file);
      }
    }
  }, []);

  const translations = {
    en: {
      dropzone: 'Drag and drop your photos here',
      or: 'or',
      browse: 'Browse Files',
      layout: 'Change Layout',
    },
    de: {
      dropzone: 'Fotos hier hereinziehen',
      or: 'oder',
      browse: 'Dateien durchsuchen',
      layout: 'Layout ändern',
    }
  };

  const t = translations[currentLang] || translations.en;

  const handleDragEvent = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  }, []);

  const toggleLayout = () => {
    setLayout(prev => prev === 'grid' ? 'masonry' : 'grid');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 mb-8 text-center transition-colors
          ${isDragging ? 'border-sage-400 bg-sage-50' : 'border-sage-200'}
          ${images.length === 0 ? 'h-64' : 'h-32'}`}
        onDragEnter={handleDragEvent}
        onDragLeave={handleDragEvent}
        onDragOver={handleDragEvent}
        onDrop={handleDrop}
      >
        <Upload className="mx-auto mb-4 text-sage-400" size={24} />
        <p className="text-charcoal-700 mb-2">{t.dropzone}</p>
        <p className="text-charcoal-700 text-sm">{t.or}</p>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
          id="file-input"
        />
        <label
          htmlFor="file-input"
          className="inline-block mt-2 px-4 py-2 bg-sage-300 text-charcoal-900 cursor-pointer hover:bg-sage-400 transition-colors"
        >
          {t.browse}
        </label>
      </div>

      {/* Layout Toggle */}
      {images.length > 0 && (
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleLayout}
            className="flex items-center gap-2 px-4 py-2 bg-sage-300 text-charcoal-900 hover:bg-sage-400 transition-colors"
          >
            <Move size={16} />
            {t.layout}
          </button>
        </div>
      )}

      {/* Image Grid */}
      <div className={`
        ${layout === 'grid' 
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
          : 'columns-1 sm:columns-2 lg:columns-3 gap-4'
        }
      `}>
        {images.map((image) => (
          <div
            key={image.id}
            className={`group relative ${layout === 'grid' ? '' : 'mb-4 break-inside-avoid'}`}
          >
            <img
              src={image.url}
              alt={image.name}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
