import React from 'react';
import { Heart, Calendar, MapPin, Clock } from 'lucide-react';

const HomePage = ({ currentLang }) => {
  const weddingDate = new Date('2025-07-19');
  const today = new Date();
  const daysUntil = Math.ceil((weddingDate - today) / (1000 * 60 * 60 * 24));

  const translations = {
    en: {
      gettingMarried: "Are getting married!",
      ourStory: "Our Story",
      storyContent: "From Würzburg to forever - our journey began in the heart of Germany...",
      ceremony: "Ceremony",
      reception: "Reception",
      rsvp: "RSVP",
      travelInfo: "Travel Info",
      photoGallery: "Photo Gallery",
      countdown: "DAYS TO GO!"
    },
    de: {
      gettingMarried: "Werden heiraten!",
      ourStory: "Unsere Geschichte",
      storyContent: "Von Würzburg in die Ewigkeit - unsere gemeinsame Reise begann im Herzen Deutschlands...",
      ceremony: "Trauung",
      reception: "Empfang",
      rsvp: "RSVP",
      travelInfo: "Anreise",
      photoGallery: "Fotogalerie",
      countdown: "TAGE BIS ZUR HOCHZEIT!"
    }
  };

  const t = translations[currentLang] || translations.en;

  return (
    <div>
      {/* Hero Section */}
      <div className="text-center py-32 px-4">
        <h1 className="text-5xl md:text-7xl text-charcoal-900 mb-6 font-display">
          JONAH & JUDITH
        </h1>
        <p className="text-lg text-charcoal-700 mb-8 font-display italic tracking-wide">
          {t.gettingMarried}
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
          <h2 className="text-4xl mb-6 font-display text-charcoal-900">{t.ourStory}</h2>
          <p className="text-lg leading-relaxed text-charcoal-700">
            {t.storyContent}
          </p>
        </div>

        {/* Event Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="text-center p-8 bg-white/80 border border-sage-200">
            <h3 className="text-2xl mb-6 font-display text-charcoal-900">{t.ceremony}</h3>
            <div className="flex flex-col items-center space-y-4">
              <Clock className="w-5 h-5 text-sage-400" />
              <p className="text-charcoal-700">15:00</p>
              <MapPin className="w-5 h-5 text-sage-400" />
              <p className="text-charcoal-700">Würzburg Cathedral</p>
            </div>
          </div>
          <div className="text-center p-8 bg-white/80 border border-sage-200">
            <h3 className="text-2xl mb-6 font-display text-charcoal-900">{t.reception}</h3>
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
            {t.rsvp}
          </button>
          <button className="p-4 bg-white/80 border border-sage-200 hover:bg-sage-100 transition-colors text-charcoal-700">
            {t.travelInfo}
          </button>
          <button className="p-4 bg-white/80 border border-sage-200 hover:bg-sage-100 transition-colors text-charcoal-700">
            {t.photoGallery}
          </button>
        </div>
      </div>

      {/* Countdown Section */}
      <div className="text-center py-16 bg-gradient-radial from-sage-100/20 via-sage-200/10 to-transparent">
        <Heart className="w-6 h-6 mx-auto mb-4 text-sage-400" />
        <p className="text-sm tracking-widest text-charcoal-700 font-light">
          {daysUntil} {t.countdown}
        </p>
      </div>
    </div>
  );
};

export default HomePage;
