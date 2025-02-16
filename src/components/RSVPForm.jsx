// RSVPForm.jsx
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';

const RSVPForm = ({ onSubmit, currentLang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guestCount: 1,
    dietaryRestrictions: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Insert the RSVP into Supabase
      const { data, error } = await supabase
        .from('rsvps')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            attending: formData.attending,
            guest_count: formData.guestCount,
            dietary_restrictions: formData.dietaryRestrictions,
            message: formData.message
          }
        ]);

      if (error) throw error;

      // Call the original onSubmit
      onSubmit(formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        attending: 'yes',
        guestCount: 1,
        dietaryRestrictions: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting RSVP:', error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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

const RSVPDashboard = ({ rsvpList, currentLang }) => {
  const translations = {
    en: {
      title: 'Guest List',
      attending: 'Attending',
      notAttending: 'Not Attending',
      guestCount: 'Guest Count',
      message: 'Message',
      noRsvp: 'No RSVPs yet'
    },
    de: {
      title: 'Gästeliste',
      attending: 'Teilnehmend',
      notAttending: 'Nicht Teilnehmend',
      guestCount: 'Anzahl der Gäste',
      message: 'Nachricht',
      noRsvp: 'Noch keine RSVPs'
    }
  };

  const t = translations[currentLang];

  if (!rsvpList || rsvpList.length === 0) {
    return (
      <div className="max-w-2xl mx-auto mt-12 px-4">
        <p className="text-center text-charcoal-700">{t.noRsvp}</p>
      </div>
    );
  }

  const attending = rsvpList.filter(rsvp => rsvp.attending === 'yes');
  const notAttending = rsvpList.filter(rsvp => rsvp.attending === 'no');
  const totalGuests = attending.reduce((sum, rsvp) => sum + rsvp.guestCount, 0);

  return (
    <div className="max-w-2xl mx-auto mt-12 px-4">
      <h3 className="text-2xl font-display text-center mb-6">{t.title}</h3>
      
      <div className="space-y-8">
        <div>
          <h4 className="font-medium mb-4">{t.attending} ({attending.length})</h4>
          <div className="space-y-4">
            {attending.map((rsvp, index) => (
              <div key={index} className="p-4 bg-white/80 border border-sage-300">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{rsvp.name}</p>
                    <p className="text-sm text-charcoal-700">{t.guestCount}: {rsvp.guestCount}</p>
                  </div>
                </div>
                {rsvp.message && (
                  <p className="mt-2 text-sm text-charcoal-700">{rsvp.message}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {notAttending.length > 0 && (
          <div>
            <h4 className="font-medium mb-4">{t.notAttending} ({notAttending.length})</h4>
            <div className="space-y-4">
              {notAttending.map((rsvp, index) => (
                <div key={index} className="p-4 bg-white/80 border border-sage-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{rsvp.name}</p>
                    </div>
                  </div>
                  {rsvp.message && (
                    <p className="mt-2 text-sm text-charcoal-700">{rsvp.message}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { RSVPForm, RSVPDashboard };
