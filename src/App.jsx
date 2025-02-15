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
    },
    tabs: {
      details: "Details",
      rsvp: "RSVP"
    }
    // ... rest of your existing translations
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
    tabs: {
      details: "Details",
      rsvp: "RSVP"
    }
    // ... rest of your existing translations
  }
};

function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const [rsvpList, setRsvpList] = useState([]);
  const [activeTab, setActiveTab] = useState('details');
  const t = translations[currentLang];
  
  const weddingDate = new Date('2025-07-19');
  const today = new Date();
  const daysUntil = Math.ceil((weddingDate - today) / (1000 * 60 * 60 * 24));

  const handleRSVPSubmit = (formData) => {
    setRsvpList(prev => [...prev, formData]);
    // Here you would typically also send the data to a backend service
  };

  const tabs = [
    {
      id: 'details',
      label: {
        en: 'Details',
        de: 'Details'
      },
      content: (
        <div className="max-w-4xl mx-auto">
          {/* Your existing wedding details content */}
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
      {/* Your existing navigation */}
      
      {/* Home section with tabs */}
      <section id="home" className="py-20">
        <TabSystem 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabs}
          currentLang={currentLang}
        />
      </section>

      {/* Rest of your existing sections */}
    </div>
  );
}

export default App;
