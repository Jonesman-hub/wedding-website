import React, { useState } from 'react';
import { RSVPForm, RSVPDashboard } from './components/RSVPForm';
import TabSystem from './components/TabSystem';

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
    }
  }
};

function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const [rsvpList, setRsvpList] = useState([]);
  const [activeTab, setActiveTab] = useState('details');
  const [activeSection, setActiveSection] = useState('home');
  const t = translations[currentLang];
  
  const weddingDate = new Date('2025-07-19');
  const today = new Date();
  const daysUntil = Math.ceil((weddingDate - today) / (1000 * 60 * 60 * 24));

  const handleRSVPSubmit = (formData) => {
    setRsvpList(prev => [...prev, formData]);
  };

  const tabs = [
    {
      id: 'details',
      label: {
        en: 'Details',
        de: 'Details'
      },
      content: (
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-display text-center mb-8">Wedding Details</h2>
          {/* Add your wedding details content here */}
        </div>
      )
    },
    {
      id: 'rsvp',
      label: {
        en: 'RSVP',
        de: 'RSVP'
      },
      content: (
        <div>
          <RSVPForm onSubmit={handleRSVPSubmit} currentLang={currentLang} />
          <RSVPDashboard rsvpList={rsvpList} currentLang={currentLang} />
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-radial from-champagne-50 via-champagne-100 to-champagne-200">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-sage-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            {Object.entries(t.nav).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`font-display text-lg transition-colors duration-300 ${
                  activeSection === key
                    ? 'text-charcoal-900'
                    : 'text-charcoal-700 hover:text-charcoal-900'
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content Sections */}
      {activeSection === 'home' && (
        <section className="py-20">
          <TabSystem 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={tabs}
            currentLang={currentLang}
          />
        </section>
      )}

      {activeSection === 'photos' && (
        <section className="py-20">
          <h2 className="text-4xl font-display text-center mb-8">Photos</h2>
          {/* Add your photos content */}
        </section>
      )}

      {activeSection === 'party' && (
        <section className="py-20">
          <h2 className="text-4xl font-display text-center mb-8">Wedding Party</h2>
          {/* Add your wedding party content */}
        </section>
      )}

      {activeSection === 'qa' && (
        <section className="py-20">
          <h2 className="text-4xl font-display text-center mb-8">Q + A</h2>
          {/* Add your Q&A content */}
        </section>
      )}

      {activeSection === 'travel' && (
        <section className="py-20">
          <h2 className="text-4xl font-display text-center mb-8">Travel</h2>
          {/* Add your travel content */}
        </section>
      )}

      {activeSection === 'todo' && (
        <section className="py-20">
          <h2 className="text-4xl font-display text-center mb-8">Things to Do</h2>
          {/* Add your things to do content */}
        </section>
      )}

      {activeSection === 'contact' && (
        <section className="py-20">
          <h2 className="text-4xl font-display text-center mb-8">Contact</h2>
          {/* Add your contact content */}
        </section>
      )}
    </div>
  );
}

export default App;
