import React, { useState } from 'react';

const translations = {
  en: {
    nav: {
      home: "Home",
      photos: "Photos",
      party: "Wedding Party",
      qa: "Q + A",
      travel: "Travel",
      todo: "Things to Do",
      contact: "Contact"
    },
    hero: {
      title: "The Wedding of",
      names: "JONAH & JUDITH",
      location: "WÜRZBURG, GERMANY",
      countdown: "DAYS TO GO!"
    }
  },
  de: {
    nav: {
      home: "Start",
      photos: "Fotos",
      party: "Hochzeitsgesellschaft",
      qa: "F + A",
      travel: "Anreise",
      todo: "Aktivitäten",
      contact: "Kontakt"
    },
    hero: {
      title: "Die Hochzeit von",
      names: "JONAH & JUDITH",
      location: "WÜRZBURG, DEUTSCHLAND",
      countdown: "TAGE BIS ZUR HOCHZEIT!"
    }
  }
};

function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const t = translations[currentLang];
  
  // Calculate days until wedding
  const weddingDate = new Date('2025-07-19');
  const today = new Date();
  const daysUntil = Math.ceil((weddingDate - today) / (1000 * 60 * 60 * 24));

  return (
    <div className="min-h-screen bg-beige-50">
      {/* Language Switcher */}
      <div className="fixed top-6 right-6 z-50">
        <select 
          value={currentLang}
          onChange={(e) => setCurrentLang(e.target.value)}
          className="px-3 py-1 border border-charcoal-700 rounded-none bg-transparent text-sm"
        >
          <option value="en">EN</option>
          <option value="de">DE</option>
        </select>
      </div>

      {/* Navigation */}
      <nav className="pt-8 pb-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm tracking-wider">
            {Object.entries(t.nav).map(([key, value]) => (
              <a 
                key={key}
                href={`#${key}`} 
                className="text-charcoal-700 hover:text-charcoal-900 transition-colors duration-200"
              >
                {value}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-32 text-center">
        <p className="text-lg text-charcoal-700 mb-6 font-display italic">
          {t.hero.title}
        </p>
        <h1 className="text-4xl md:text-6xl text-charcoal-900 mb-6 font-display">
          {t.hero.names}
        </h1>
        <div className="space-y-4">
          <p className="text-sm tracking-widest text-charcoal-700">
            JULY 19, 2025 · {t.hero.location}
          </p>
          <p className="text-sm tracking-widest text-charcoal-700">
            {daysUntil} {t.hero.countdown}
          </p>
        </div>
      </div>

      {/* Event Details Section */}
      <div className="border-t border-b border-charcoal-700 py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 text-center">
            <div>
              <h2 className="text-3xl font-display mb-2">JULY 19,</h2>
              <p className="text-xl">2025</p>
            </div>
            <div>
              <h2 className="text-3xl font-display mb-2">WÜRZBURG</h2>
              <p className="text-xl">GERMANY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
