// RSVPForm.jsx
import React, { useState } from 'react';

const RSVPForm = ({ onSubmit, currentLang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guestCount: 1,
    dietaryRestrictions: '',
    message: ''
  });

  const translations = {
    en: {
      title: 'RSVP',
      name: 'Full Name',
      email: 'Email',
      attending: 'Will you be attending?',
      yes: 'Yes, I will attend',
      no: 'Unable to attend',
      guestCount: 'Number of Guests',
      dietary: 'Dietary Restrictions',
      message: 'Message for the Couple',
      submit: 'Submit RSVP',
      placeholder: {
        dietary: 'Please list any dietary restrictions or allergies',
        message: 'Share your message or any special notes'
      }
    },
    de: {
      title: 'RSVP',
      name: 'Vollständiger Name',
      email: 'E-Mail',
      attending: 'Werden Sie teilnehmen?',
      yes: 'Ja, ich nehme teil',
      no: 'Kann leider nicht teilnehmen',
      guestCount: 'Anzahl der Gäste',
      dietary: 'Ernährungseinschränkungen',
      message: 'Nachricht an das Brautpaar',
      submit: 'RSVP absenden',
      placeholder: {
        dietary: 'Bitte geben Sie Ernährungseinschränkungen oder Allergien an',
        message: 'Teilen Sie Ihre Nachricht oder besondere Hinweise mit'
      }
    }
  };

  const t = translations[currentLang];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      email: '',
      attending: 'yes',
      guestCount: 1,
      dietaryRestrictions: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-display text-center mb-8">{t.title}</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t.name}
            required
            className="w-full p-3 border border-sage-300 bg-white/80 focus:outline-none focus:border-sage-400"
          />
          
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t.email}
            required
            className="w-full p-3 border border-sage-300 bg-white/80 focus:outline-none focus:border-sage-400"
          />

          <div className="space-y-2">
            <label className="block text-sm text-charcoal-700">{t.attending}</label>
            <select
              name="attending"
              value={formData.attending}
              onChange={handleChange}
              className="w-full p-3 border border-sage-300 bg-white/80 focus:outline-none focus:border-sage-400"
            >
              <option value="yes">{t.yes}</option>
              <option value="no">{t.no}</option>
            </select>
          </div>

          {formData.attending === 'yes' && (
            <>
              <div className="space-y-2">
                <label className="block text-sm text-charcoal-700">{t.guestCount}</label>
                <input
                  type="number"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  min="1"
                  max="5"
                  className="w-full p-3 border border-sage-300 bg-white/80 focus:outline-none focus:border-sage-400"
                />
              </div>

              <textarea
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleChange}
                placeholder={t.placeholder.dietary}
                className="w-full p-3 border border-sage-300 bg-white/80 focus:outline-none focus:border-sage-400 h-24"
              />
            </>
          )}

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t.placeholder.message}
            className="w-full p-3 border border-sage-300 bg-white/80 focus:outline-none focus:border-sage-400 h-32"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 bg-sage-300 text-charcoal-900 hover:bg-sage-400 transition-colors duration-300"
        >
          {t.submit}
        </button>
      </form>
    </div>
  );
};

// RSVPDashboard.jsx
const RSVPDashboard = ({ rsvpList, currentLang }) => {
  const translations = {
    en: {
      title: 'RSVP Dashboard',
      stats: {
        total: 'Total RSVPs',
        attending: 'Attending',
        declined: 'Declined',
        totalGuests: 'Total Guests'
      },
      list: {
        name: 'Name',
        status: 'Status',
        guests: 'Guests',
        dietary: 'Dietary Notes'
      }
    },
    de: {
      title: 'RSVP Übersicht',
      stats: {
        total: 'Gesamt RSVPs',
        attending: 'Zusagen',
        declined: 'Absagen',
        totalGuests: 'Gesamtzahl Gäste'
      },
      list: {
        name: 'Name',
        status: 'Status',
        guests: 'Gäste',
        dietary: 'Ernährungshinweise'
      }
    }
  };

  const t = translations[currentLang];

  const stats = {
    total: rsvpList.length,
    attending: rsvpList.filter(rsvp => rsvp.attending === 'yes').length,
    declined: rsvpList.filter(rsvp => rsvp.attending === 'no').length,
    totalGuests: rsvpList.reduce((sum, rsvp) => sum + (rsvp.attending === 'yes' ? rsvp.guestCount : 0), 0)
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-display text-center mb-12">{t.title}</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {Object.entries(stats).map(([key, value]) => (
          <div key={key} className="bg-white/80 p-6 text-center">
            <p className="text-3xl font-display mb-2">{value}</p>
            <p className="text-sm text-charcoal-700 tracking-wide">{t.stats[key]}</p>
          </div>
        ))}
      </div>

      {/* RSVP List */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-sage-300">
              <th className="py-4 text-left">{t.list.name}</th>
              <th className="py-4 text-left">{t.list.status}</th>
              <th className="py-4 text-left">{t.list.guests}</th>
              <th className="py-4 text-left">{t.list.dietary}</th>
            </tr>
          </thead>
          <tbody>
            {rsvpList.map((rsvp, index) => (
              <tr key={index} className="border-b border-sage-100">
                <td className="py-4">{rsvp.name}</td>
                <td className="py-4">
                  <span className={`px-2 py-1 text-sm ${
                    rsvp.attending === 'yes' 
                      ? 'bg-sage-100 text-charcoal-900' 
                      : 'bg-champagne-100 text-charcoal-900'
                  }`}>
                    {rsvp.attending === 'yes' ? '✓' : '✕'}
                  </span>
                </td>
                <td className="py-4">{rsvp.attending === 'yes' ? rsvp.guestCount : '-'}</td>
                <td className="py-4 text-sm text-charcoal-700">{rsvp.dietaryRestrictions || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { RSVPForm, RSVPDashboard };
