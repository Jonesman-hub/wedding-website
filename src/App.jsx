import React, { useState } from 'react';
import TabSystem from './components/TabSystem';
import { RSVPForm, RSVPDashboard } from './components/RSVPForm';

const translations = {
  en: {
    nav: {
      home: "Home",
      photos: "Photos",
      party: "Wedding Party",
      qa: "Q + A",
      travel: "Travel",
      todo: "Things to Do",
      rsvp: "RSVP",
      contact: "Contact"
    },
    hero: {
      title: "The Wedding of",
      names: "JONAH & JUDITH",
      location: "WÜRZBURG, GERMANY",
      countdown: "DAYS TO GO!"
    },
    tabs: {
      form: "RSVP Form",
      list: "Guest List"
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
      rsvp: "RSVP",
      contact: "Kontakt"
    },
    hero: {
      title: "Die Hochzeit von",
      names: "JONAH & JUDITH",
      location: "WÜRZBURG, DEUTSCHLAND",
      countdown: "TAGE BIS ZUR HOCHZEIT!"
    },
    tabs: {
      form: "RSVP Formular",
      list: "Gästeliste"
    }
  }
};

function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const [activeTab, setActiveTab] = useState('home');
  const [rsvpList, setRsvpList] = useState([]);
  const [rsvpActiveTab, setRsvpActiveTab] = useState('form');
  
  const t = translations[currentLang];
  
  const weddingDate = new Date('2025-07-19');
  const today = new Date();
  const daysUntil = Math.ceil((weddingDate - today) / (1000 * 60 * 60 * 24));

  const tabs = [
    {
      id: 'home',
      label: {
        en: 'Home',
        de: 'Start'
      },
      content: null // You can add home content here
    },
    {
      id: 'photos',
      label: {
        en: 'Photos',
        de: 'Fotos'
      },
      content: <PhotoGallery currentLang={currentLang} />
    },
    // Add other tabs as needed
  ];
  
  const handleRSVPSubmit = (formData) => {
    setRsvpList([...rsvpList, formData]);
  };

  const rsvpTabs = [
    {
      id: 'form',
      label: {
        en: 'RSVP Form',
        de: 'RSVP Formular'
      },
      content: <RSVPForm onSubmit={handleRSVPSubmit} currentLang={currentLang} />
    },
    {
      id: 'list',
      label: {
        en: 'Guest List',
        de: 'Gästeliste'
      },
      content: <RSVPDashboard rsvpList={rsvpList} currentLang={currentLang} />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-radial from-champagne-50 via-champagne-100 to-champagne-200">
      {/* Language Switcher */}
      <div className="fixed top-6 right-6 z-50">
        <select 
          value={currentLang}
          onChange={(e) => setCurrentLang(e.target.value)}
          className="px-3 py-1 border border-charcoal-700 rounded-none bg-transparent text-sm hover:border-charcoal-900 transition-colors duration-300"
        >
          <option value="en">EN</option>
          <option value="de">DE</option>
        </select>
      </div>

      {/* Navigation */}
      <nav className="pt-8 pb-4 border-b border-sage-300/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm tracking-wider">
            {Object.entries(t.nav).map(([key, value]) => (
              <button 
                key={key}
                onClick={() => setActiveTab(key)}
                className={`text-charcoal-700 hover:text-charcoal-900 transition-all duration-300 hover:border-b hover:border-sage-300 ${
                  activeTab === key ? 'border-b border-sage-300' : ''
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content Sections */}
      {activeTab === 'home' ? (
        <>
          {/* Hero Section */}
          <div className="container mx-auto px-4 pt-32 pb-40 text-center">
            <p className="text-lg text-charcoal-700 mb-8 font-display italic tracking-wide">
              {t.hero.title}
            </p>
            <h1 className="text-5xl md:text-7xl text-charcoal-900 mb-12 font-display leading-tight">
              {t.hero.names}
            </h1>
            <div className="space-y-6">
              <p className="text-sm tracking-widest text-charcoal-700 border-b border-t border-sage-300/50 py-4 inline-block px-8">
                JULY 19, 2025 · {t.hero.location}
              </p>
              <p className="text-sm tracking-widest text-charcoal-700 font-light">
                {daysUntil} {t.hero.countdown}
              </p>
            </div>
          </div>

          {/* Event Details Section */}
          <div className="py-32 relative">
            <div className="absolute inset-0 bg-gradient-radial from-sage-100/20 via-sage-200/10 to-transparent"></div>
            <div className="container mx-auto px-4 relative">
              <div className="grid md:grid-cols-2 gap-16 text-center">
                <div className="group">
                  <h2 className="text-4xl md:text-5xl font-display mb-3 tracking-wide">JULY 19,</h2>
                  <p className="text-2xl tracking-wider font-light transition-all duration-300 group-hover:text-sage-400">2025</p>
                </div>
                <div className="group relative">
                  <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 h-16 w-px bg-sage-300/50 hidden md:block"></div>
                  <h2 className="text-4xl md:text-5xl font-display mb-3 tracking-wide">WÜRZBURG</h2>
                  <p className="text-2xl tracking-wider font-light transition-all duration-300 group-hover:text-sage-400">GERMANY</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : activeTab === 'rsvp' ? (
        <div className="py-16">
          <TabSystem
            activeTab={rsvpActiveTab}
            setActiveTab={setRsvpActiveTab}
            tabs={rsvpTabs}
            currentLang={currentLang}
          />
        </div>
      ) : (
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-display text-center">
            {t.nav[activeTab]} Content Coming Soon
          </h2>
        </div>
      )}
    </div>
  );
}

export default App;
