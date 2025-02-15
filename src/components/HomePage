import React from 'react';
import { Heart, Calendar, MapPin, Clock } from 'lucide-react';

const HomePage = () => {
  const weddingDate = new Date('2025-07-19');
  const today = new Date();
  const daysUntil = Math.ceil((weddingDate - today) / (1000 * 60 * 60 * 24));

  return (
    <div className="min-h-screen bg-gradient-radial from-champagne-50 via-champagne-100 to-champagne-200">
      {/* Hero Section */}
      <div className="text-center py-32 px-4">
        <h1 className="text-5xl md:text-7xl text-charcoal-900 mb-6 font-display">
          JONAH & JUDITH
        </h1>
        <p className="text-lg text-charcoal-700 mb-8 font-display italic tracking-wide">
          Are getting married!
        </p>
        <div className="flex items-center justify-center space-x-3 text-charcoal-700">
          <Calendar className="w-5 h-5" />
          <p className="text-sm tracking-widest font-light">JULY 19, 2025</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Our Story Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl mb-6 font-display text-charcoal-900">Our Story</h2>
          <p className="text-lg leading-relaxed text-charcoal-700">
            From Würzburg to forever - our journey began in the heart of Germany...
          </p>
        </div>

        {/* Event Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="text-center p-8 bg-white/80 border border-sage-200">
            <h3 className="text-2xl mb-6 font-display text-charcoal-900">Ceremony</h3>
            <div className="flex flex-col items-center space-y-4">
              <Clock className="w-5 h-5 text-sage-400" />
              <p className="text-charcoal-700">15:00</p>
              <MapPin className="w-5 h-5 text-sage-400" />
              <p className="text-charcoal-700">Würzburg Cathedral</p>
            </div>
          </div>
          <div className="text-center p-8 bg-white/80 border border-sage-200">
            <h3 className="text-2xl mb-6 font-display text-charcoal-900">Reception</h3>
            <div className="flex flex-col items-center space-y-4">
              <Clock className="w-5 h-5 text-sage-400" />
              <p className="text-charcoal-700">17:00</p>
              <MapPin className="w-5 h-5 text-sage-400" />
              <p className="text-charcoal-700">Würzburg Residence</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <button className="p-4 bg-white/80 border border-sage-200 hover:bg-sage-100 transition-colors text-charcoal-700">
            RSVP
          </button>
          <button className="p-4 bg-white/80 border border-sage-200 hover:bg-sage-100 transition-colors text-charcoal-700">
            Travel Info
          </button>
          <button className="p-4 bg-white/80 border border-sage-200 hover:bg-sage-100 transition-colors text-charcoal-700">
            Photo Gallery
          </button>
        </div>
      </div>

      {/* Countdown Section */}
      <div className="text-center py-16 bg-gradient-radial from-sage-100/20 via-sage-200/10 to-transparent">
        <Heart className="w-6 h-6 mx-auto mb-4 text-sage-400" />
        <p className="text-sm tracking-widest text-charcoal-700 font-light">
          {daysUntil} DAYS TO GO!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
