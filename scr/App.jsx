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
      date: "July 17, 2025"
    }
  }
};

function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const t = translations[currentLang];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 py-4">
            <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-rose-500">
              <Heart size={18} />
              <span>{t.nav.home}</span>
            </a>
            {/* Add other nav items similarly */}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif text-center text-gray-800 mb-4">
          {t.hero.title}
        </h1>
        <p className="text-xl text-center text-gray-600">
          {t.hero.date}
        </p>
      </main>
    </div>
  );
}

export default App;
