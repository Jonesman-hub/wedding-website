import React, { useState } from 'react';
import { Calendar, Gift, Map, Clock, Heart, Camera, Hotel } from 'lucide-react';

const translations = {
  en: {
    nav: {
      home: "Home",
      story: "Our Story",
      schedule: "Schedule",
      registry: "Registry",
      venue: "Venue",
      photos: "Photos",
      accommodations: "Accommodations"
    },
    hero: {
      title: "Our Wedding",
      date: "July 17, 2025",
      countdown: "Days until we say 'I do'"
    },
    schedule: {
      title: "Wedding Day Schedule",
      ceremony: "Ceremony",
      cocktail: "Cocktail Hour",
      reception: "Reception",
      party: "Party"
    }
  },
  de: {
    nav: {
      home: "Startseite",
      story: "Unsere Geschichte",
      schedule: "Zeitplan",
      registry: "Geschenkliste",
      venue: "Lokalität",
      photos: "Fotos",
      accommodations: "Unterkünfte"
    },
    hero: {
      title: "Unsere Hochzeit",
      date: "17. Juli 2025",
      countdown: "Tage bis zum Ja-Wort"
    },
    schedule: {
      title: "Tagesablauf",
      ceremony: "Trauung",
      cocktail: "Sektempfang",
      reception: "Empfang",
      party: "Feier"
    }
  }
};

function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const t = translations[currentLang];
  
  // Calculate days until wedding
  const weddingDate = new Date('2025-07-17');
  const today = new Date();
  const daysUntil = Math.ceil((weddingDate - today) / (1000 * 60 * 60 * 24));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <select 
          value={currentLang}
          onChange={(e) => setCurrentLang(e.target.value)}
          className="px-3 py-1 border rounded-md bg-white shadow-sm"
        >
          <option value="en">English</option>
          <option value="de">Deutsch</option>
        </select>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 py-4">
            <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-rose-500">
              <Heart size={18} />
              <span>{t.nav.home}</span>
            </a>
            <a href="#story" className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-rose-500">
              <Clock size={18} />
              <span>{t.nav.story}</span>
            </a>
            <a href="#schedule" className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-rose-500">
              <Calendar size={18} />
              <span>{t.nav.schedule}</span>
            </a>
            <a href="#registry" className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-rose-500">
              <Gift size={18} />
              <span>{t.nav.registry}</span>
            </a>
            <a href="#venue" className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-rose-500">
              <Map size={18} />
              <span>{t.nav.venue}</span>
            </a>
            <a href="#photos" className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-rose-500">
              <Camera size={18} />
              <span>{t.nav.photos}</span>
            </a>
            <a href="#accommodations" className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-rose-500">
              <Hotel size={18} />
              <span>{t.nav.accommodations}</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-96 bg-rose-50">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-serif text-rose-900 mb-4">{t.hero.title}</h1>
          <p className="text-2xl text-rose-700 mb-8">{t.hero.date}</p>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg">
            <p className="text-lg text-rose-600">
              {t.hero.countdown}: <span className="font-bold">{daysUntil}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-gray-800 mb-12">
            {t.schedule.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { time: "16:00", title: t.schedule.ceremony },
              { time: "17:00", title: t.schedule.cocktail },
              { time: "18:30", title: t.schedule.reception },
              { time: "21:00", title: t.schedule.party }
            ].map((event, index) => (
              <div key={index} className="text-center p-6 bg-rose-50 rounded-lg">
                <p className="text-xl font-bold text-rose-600 mb-2">{event.time}</p>
                <p className="text-gray-700">{event.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
