// App.jsx
import React, { useState } from 'react';
import TabSystem from './components/TabSystem';
import PhotoGallery from './components/PhotoGallery';
import { RSVPForm } from './components/RSVPForm';
import HomePage from './components/HomePage';
import TravelPage from './components/TravelPage';
import ContactPage from './components/ContactPage';

const translations = {
  en: {
    nav: {
      home: "Home",
      photos: "Photos",
      party: "Wedding Party",
      rsvp: "RSVP",
      qa: "Q + A",
      travel: "Travel",
      todo: "Things to Do",
      contact: "Contact"
    }
  },
  de: {
    nav: {
      home: "Start",
      photos: "Fotos",
      party: "Hochzeitsgesellschaft",
      rsvp: "RSVP",
      qa: "F + A",
      travel: "Anreise",
      todo: "Aktivitäten",
      contact: "Kontakt"
    }
  }
};

function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const [activeTab, setActiveTab] = useState('home');
  const [rsvpList, setRsvpList] = useState([]);
  const t = translations[currentLang];

  const handleRSVPSubmit = (formData) => {
    setRsvpList(prev => [...prev, formData]);
  };

  const getTabContent = (tabId) => {
    switch(tabId) {
      case 'photos':
        return <PhotoGallery currentLang={currentLang} />;
      case 'rsvp':
        return <RSVPForm onSubmit={handleRSVPSubmit} currentLang={currentLang} />;
      case 'travel':
        return <TravelPage currentLang={currentLang} />;
      case 'contact':
        return <ContactPage currentLang={currentLang} />;
      default:
        return null;
    }
  };

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

      {/* Tab Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === 'home' ? (
          <HomePage currentLang={currentLang} />
        ) : (
          <TabSystem content={getTabContent(activeTab)} />
        )}
      </div>
    </div>
  );
}

export default App;
