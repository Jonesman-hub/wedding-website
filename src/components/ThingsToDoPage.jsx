import React, { useState } from 'react';
import { Wine, Castle, Bike, Utensils, TreePine, Music, Coffee } from 'lucide-react';

const translations = {
  en: {
    title: "Things to Do in Würzburg",
    subtitle: "Explore the beauty and culture of our city",
    categories: {
      historical: "Historical Sites",
      outdoor: "Outdoor Activities",
      food: "Food & Wine",
      culture: "Arts & Culture",
      family: "Family Activities"
    },
    activities: {
      historical: [
        {
          title: "Residenz Palace",
          description: "UNESCO World Heritage site featuring stunning baroque architecture and the world's largest ceiling fresco",
          tips: "Book guided tours in advance, plan 2-3 hours for visit"
        },
        {
          title: "Marienberg Fortress",
          description: "Historic fortress overlooking the city with a museum and beautiful gardens",
          tips: "Best visited in the afternoon for great city views"
        },
        {
          title: "Old Main Bridge",
          description: "Historic bridge with baroque statues, offering wine tasting and spectacular views",
          tips: "Visit during sunset for the best experience"
        }
      ],
      outdoor: [
        {
          title: "Vineyard Tours",
          description: "Explore the famous Franconian wine country by foot or bike",
          tips: "Many tours include wine tasting, book in advance"
        },
        {
          title: "Main River Promenade",
          description: "Perfect for walking, jogging, or cycling along the river",
          tips: "Rental bikes available throughout the city"
        },
        {
          title: "Court Garden",
          description: "Beautiful baroque garden next to the Residenz",
          tips: "Free entry, perfect for picnics"
        }
      ],
      food: [
        {
          title: "Wine Tasting",
          description: "Sample local Franconian wines in traditional wine cellars",
          tips: "Try the famous Bocksbeutel wines"
        },
        {
          title: "Market Square",
          description: "Weekly farmers market with local specialties",
          tips: "Best on Saturday mornings"
        },
        {
          title: "Traditional Restaurants",
          description: "Try local specialties like Schäufele and Franconian dumplings",
          tips: "Reservations recommended for dinner"
        }
      ],
      culture: [
        {
          title: "Mozart Festival",
          description: "Annual classical music festival in various historic venues",
          tips: "Book tickets well in advance"
        },
        {
          title: "Museum am Dom",
          description: "Modern and contemporary art in historical context",
          tips: "Check for temporary exhibitions"
        },
        {
          title: "City Theater",
          description: "Regular performances of opera, ballet, and plays",
          tips: "English subtitles available for some shows"
        }
      ],
      family: [
        {
          title: "Mini Golf",
          description: "18-hole course in the Husaren Park",
          tips: "Great for all ages, open April-October"
        },
        {
          title: "Botanical Garden",
          description: "University garden with diverse plant collections",
          tips: "Free entry, special children's programs available"
        },
        {
          title: "River Cruise",
          description: "Sightseeing boats on the Main River",
          tips: "1-hour tours perfect for families"
        }
      ]
    }
  },
  de: {
    title: "Aktivitäten in Würzburg",
    subtitle: "Entdecken Sie die Schönheit und Kultur unserer Stadt",
    categories: {
      historical: "Historische Stätten",
      outdoor: "Outdoor-Aktivitäten",
      food: "Essen & Wein",
      culture: "Kunst & Kultur",
      family: "Familienaktivitäten"
    },
    activities: {
      historical: [
        {
          title: "Residenz",
          description: "UNESCO-Weltkulturerbe mit beeindruckender Barockarchitektur und dem größten Deckenfresko der Welt",
          tips: "Führungen im Voraus buchen, 2-3 Stunden einplanen"
        },
        {
          title: "Festung Marienberg",
          description: "Historische Festung mit Museum und schönen Gartenanlagen",
          tips: "Am besten nachmittags für beste Stadtaussicht besuchen"
        },
        {
          title: "Alte Mainbrücke",
          description: "Historische Brücke mit Barockstatuen, Weinverkostung und spektakulärer Aussicht",
          tips: "Besuch zum Sonnenuntergang empfohlen"
        }
      ],
      outdoor: [
        {
          title: "Weinberg-Touren",
          description: "Erkunden Sie das berühmte fränkische Weinland zu Fuß oder mit dem Fahrrad",
          tips: "Viele Touren inkl. Weinprobe, Vorausbuchung empfohlen"
        },
        {
          title: "Main-Promenade",
          description: "Ideal zum Spazieren, Joggen oder Radfahren entlang des Flusses",
          tips: "Fahrradverleih in der ganzen Stadt verfügbar"
        },
        {
          title: "Hofgarten",
          description: "Schöner Barockgarten neben der Residenz",
          tips: "Freier Eintritt, perfekt für Picknicks"
        }
      ],
      food: [
        {
          title: "Weinprobe",
          description: "Probieren Sie lokale fränkische Weine in traditionellen Weinkellern",
          tips: "Probieren Sie die berühmten Bocksbeutel-Weine"
        },
        {
          title: "Marktplatz",
          description: "Wöchentlicher Bauernmarkt mit lokalen Spezialitäten",
          tips: "Am besten am Samstagvormittag"
        },
        {
          title: "Traditionelle Restaurants",
          description: "Probieren Sie lokale Spezialitäten wie Schäufele und fränkische Knödel",
          tips: "Reservierung für das Abendessen empfohlen"
        }
      ],
      culture: [
        {
          title: "Mozartfest",
          description: "Jährliches klassisches Musikfestival an verschiedenen historischen Orten",
          tips: "Karten frühzeitig buchen"
        },
        {
          title: "Museum am Dom",
          description: "Moderne und zeitgenössische Kunst im historischen Kontext",
          tips: "Aktuelle Sonderausstellungen beachten"
        },
        {
          title: "Stadttheater",
          description: "Regelmäßige Aufführungen von Oper, Ballett und Schauspiel",
          tips: "Englische Untertitel bei ausgewählten Vorstellungen"
        }
      ],
      family: [
        {
          title: "Minigolf",
          description: "18-Loch-Anlage im Husarenpark",
          tips: "Geeignet für alle Altersgruppen, geöffnet April-Oktober"
        },
        {
          title: "Botanischer Garten",
          description: "Universitätsgarten mit vielfältigen Pflanzensammlungen",
          tips: "Freier Eintritt, spezielle Kinderprogramme verfügbar"
        },
        {
          title: "Flusskreuzfahrt",
          description: "Ausflugsboote auf dem Main",
          tips: "1-stündige Touren perfekt für Familien"
        }
      ]
    }
  }
};

const CategoryCard = ({ icon: Icon, title, activities, expanded, onClick }) => (
  <div className="bg-white shadow-md overflow-hidden">
    <button
      onClick={onClick}
      className="w-full p-4 text-left flex items-center justify-between hover:bg-sage-50 transition-colors"
    >
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5 text-sage-400" />
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
    </button>
    
    {expanded && (
      <div className="p-4 space-y-4 bg-white">
        {activities.map((activity, index) => (
          <div key={index} className="border-b border-sage-100 last:border-0 pb-4 last:pb-0">
            <h4 className="font-medium mb-2">{activity.title}</h4>
            <p className="text-charcoal-700 mb-2">{activity.description}</p>
            <p className="text-sm text-sage-400 italic">{activity.tips}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);

const ThingsToDoPage = ({ currentLang = 'en' }) => {
  const [expandedCategory, setExpandedCategory] = useState('historical');
  const t = translations[currentLang];

  const categoryIcons = {
    historical: Castle,
    outdoor: Bike,
    food: Utensils,
    culture: Music,
    family: TreePine
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-display text-center mb-2">{t.title}</h1>
      <p className="text-center text-charcoal-700 mb-12">{t.subtitle}</p>

      <div className="space-y-4">
        {Object.entries(t.categories).map(([key, value]) => (
          <CategoryCard
            key={key}
            icon={categoryIcons[key]}
            title={value}
            activities={t.activities[key]}
            expanded={expandedCategory === key}
            onClick={() => setExpandedCategory(expandedCategory === key ? null : key)}
          />
        ))}
      </div>
    </div>
  );
};

export default ThingsToDoPage;
