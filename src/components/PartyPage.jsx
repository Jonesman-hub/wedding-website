import React from 'react';
import { Clock, MapPin, Cake, Camera, Coffee, Book } from 'lucide-react';

const translations = {
  en: {
    title: "Wedding Celebration",
    venue: {
      title: "Venue",
      name: "Römerhof Kitzingen",
      link: "View Venue Website",
    },
    schedule: {
      title: "Schedule",
      afternoon: {
        title: "Afternoon at Römerhof",
        time: "16:00 - 19:00",
        welcome: "Welcome Speech",
        outdoors: "Outdoor Area",
        activities: [
          "Coffee and cake",
          "Group photos",
          "Games and entertainment"
        ],
        courtyard: "Courtyard Activities",
        courtyardItems: [
          "Photo booth",
          "Guest book"
        ]
      },
      evening: {
        title: "Evening Program & Dinner",
        time: "19:00 - 20:00",
        note: "Wedding cake will be served as a midnight snack"
      }
    }
  },
  de: {
    title: "Hochzeitsfeier",
    venue: {
      title: "Location",
      name: "Römerhof Kitzingen",
      link: "Zur Venue-Website",
    },
    schedule: {
      title: "Zeitplan",
      afternoon: {
        title: "Römerhof Nachmittag",
        time: "16:00 - 19:00",
        welcome: "Willkommensrede",
        outdoors: "Außenbereich",
        activities: [
          "Kaffee und Kuchen",
          "Gruppenfotos",
          "Spiel und Spaß"
        ],
        courtyard: "Innenhof Aktivitäten",
        courtyardItems: [
          "Fotobox",
          "Gästebuch"
        ]
      },
      evening: {
        title: "Abendessen und Abendprogramm",
        time: "19:00 - 20:00",
        note: "Hochzeitstorte als Mitternachtssnack"
      }
    }
  }
};

const PartyPage = ({ currentLang = 'en' }) => {
  const t = translations[currentLang];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-display text-center mb-12">{t.title}</h1>

      {/* Venue Section */}
      <div className="bg-white p-6 shadow-md">
        <div className="mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-sage-400" />
            {t.venue.title}
          </h2>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{t.venue.name}</h3>
            <a 
              href="https://www.roemerhof-kitzingen.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sage-400 hover:text-sage-300 underline"
            >
              {t.venue.link}
            </a>
          </div>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="bg-white p-6 shadow-md">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-6">
          <Clock className="h-5 w-5 text-sage-400" />
          {t.schedule.title}
        </h2>

        {/* Afternoon */}
        <div className="space-y-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="h-5 w-5 text-sage-400" />
              <h3 className="text-lg font-medium">{t.schedule.afternoon.title}</h3>
            </div>
            <p className="text-charcoal-700 mb-4">{t.schedule.afternoon.time}</p>
            <div className="pl-4 space-y-4">
              <p className="font-medium">{t.schedule.afternoon.welcome}</p>
              <div>
                <p className="font-medium mb-2">{t.schedule.afternoon.outdoors}</p>
                <ul className="list-disc pl-5 space-y-1">
                  {t.schedule.afternoon.activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">{t.schedule.afternoon.courtyard}</p>
                <ul className="list-disc pl-5 space-y-1">
                  {t.schedule.afternoon.courtyardItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Evening */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Cake className="h-5 w-5 text-sage-400" />
            <h3 className="text-lg font-medium">{t.schedule.evening.title}</h3>
          </div>
          <p className="text-charcoal-700 mb-2">{t.schedule.evening.time}</p>
          <p className="text-charcoal-700 italic">{t.schedule.evening.note}</p>
        </div>
      </div>
    </div>
  );
};

export default PartyPage;
