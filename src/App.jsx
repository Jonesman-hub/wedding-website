import React, { useState } from 'react';
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
      rsvp: "RSVP",  // Added RSVP nav item
      contact: "Contact"
    },
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
      rsvp: "RSVP",  // Added RSVP nav item
      contact: "Kontakt"
    },
    // ... rest of your existing translations
  }
};

function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const [rsvpList, setRsvpList] = useState([]);
  const t = translations[currentLang];
  
  const weddingDate = new Date('2025-07-19');
  const today = new Date();
  const daysUntil = Math.ceil((weddingDate - today) / (1000 * 60 * 60 * 24));

  const handleRSVPSubmit = (formData) => {
    setRsvpList(prev => [...prev, formData]);
    // Here you would typically also send the data to a backend service
  };

  return (
    <div className="min-h-screen bg-gradient-radial from-champagne-50 via-champagne-100 to-champagne-200">
      {/* Your existing code... */}

      {/* RSVP Section */}
      <section id="rsvp" className="py-20 bg-gradient-radial from-sage-100/20 via-sage-200/10 to-transparent">
        <RSVPForm onSubmit={handleRSVPSubmit} currentLang={currentLang} />
        <RSVPDashboard rsvpList={rsvpList} currentLang={currentLang} />
      </section>

      {/* Rest of your existing code... */}
    </div>
  );
}

export default App;
