import React from 'react';
import { Heart, Calendar, MapPin } from 'lucide-react';

const translations = {
  en: {
    title: "Jonah & Judith",
    subtitle: "We're getting married!",
    date: "July 19, 2025",
    location: "Würzburg, Germany",
    welcome: {
      title: "Welcome to Our Wedding Website",
      message: "We are excited to share our special day with you! Here you'll find all the information about our wedding celebration.",
    },
    countdown: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      until: "until we say 'I do'",
    },
    navigation: {
      message: "Use the navigation menu above to find details about:",
      items: [
        "Travel information and accommodation",
        "Wedding party details and schedule",
        "Things to do in Würzburg",
        "Photo gallery",
        "RSVP form"
      ]
    }
  },
  de: {
    title: "Jonah & Judith",
    subtitle: "Wir heiraten!",
    date: "19. Juli 2025",
    location: "Würzburg, Deutschland",
    welcome: {
      title: "Willkommen auf unserer Hochzeitswebsite",
      message: "Wir freuen uns darauf, unseren besonderen Tag mit euch zu teilen! Hier findet ihr alle Informationen zu unserer Hochzeitsfeier.",
    },
    countdown: {
      days: "Tage",
      hours: "Stunden",
      minutes: "Minuten",
      seconds: "Sekunden",
      until: "bis wir 'Ja' sagen",
    },
    navigation: {
      message: "Im Navigationsmenü oben findet ihr Details zu:",
      items: [
        "Anreise und Unterkünfte",
        "Hochzeitsgesellschaft und Zeitplan",
        "Aktivitäten in Würzburg",
        "Fotogalerie",
        "RSVP-Formular"
      ]
    }
  }
};

const HomePage = ({ currentLang = 'en' }) => {
  const t = translations[currentLang];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-center">
      <h1 className="text-5xl font-display mb-4">{t.title}</h1>
      <h2 className="text-2xl font-display mb-8">{t.subtitle}</h2>

      <div className="flex justify-center items-center gap-4 mb-12">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-sage-400" />
          <span>{t.date}</span>
        </div>
        <Heart className="h-5 w-5 text-sage-400" />
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-sage-400" />
          <span>{t.location}</span>
        </div>
      </div>

      <div className="bg-white p-8 shadow-md mb-12">
        <h3 className="text-2xl font-display mb-4">{t.welcome.title}</h3>
        <p className="text-charcoal-700 mb-6">{t.welcome.message}</p>
      </div>

      <div className="bg-white p-8 shadow-md mb-12">
        <p className="text-lg mb-4">{t.navigation.message}</p>
        <ul className="space-y-2 text-charcoal-700">
          {t.navigation.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
