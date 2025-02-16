import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calendar, Plane, Hotel, Train, Bus } from 'lucide-react';

const translations = {
  en: {
    dates: {
      title: "Important Dates",
      wedding: "Wedding Day",
      weddingDate: "Saturday, July 19, 2025 at 16:00",
      arrival: "Suggested Arrival",
      arrivalInfo: "We recommend arriving by July 12, 2025 to have time to settle in and explore the beautiful city of Würzburg before the wedding."
    },
    travel: {
      title: "Getting Here",
      airports: "Nearest Airports",
      transport: "Ground Transportation",
      deutschlandTicket: "Deutschland Ticket",
      ticketInfo: "For €58, you can purchase a Deutschland Ticket which allows unlimited travel on regional trains and all local public transport throughout Germany.",
      localTransport: "Local Transportation",
      busInfo: "Würzburg has an extensive bus and tram network. Single tickets can be purchased at ticket machines at stops or directly from the bus driver. Day passes are also available and might be more economical if you plan to use public transport frequently."
    },
    accommodation: {
      title: "Where to Stay",
      hotelOptions: "Hotel Options",
      alternative: "Alternative Options",
      altText: "The city also offers many Airbnb options throughout the city center and surrounding areas. We recommend booking early as July is peak tourist season in Würzburg."
    }
  },
  de: {
    dates: {
      title: "Wichtige Termine",
      wedding: "Hochzeitstag",
      weddingDate: "Samstag, 19. Juli 2025 um 16:00 Uhr",
      arrival: "Empfohlene Anreise",
      arrivalInfo: "Wir empfehlen, bis zum 12. Juli 2025 anzureisen, um Zeit zu haben, sich einzuleben und das schöne Würzburg vor der Hochzeit zu erkunden."
    },
    travel: {
      title: "Anreise",
      airports: "Nächstgelegene Flughäfen",
      transport: "Bodentransport",
      deutschlandTicket: "Deutschland Ticket",
      ticketInfo: "Für 58€ können Sie ein Deutschland Ticket erwerben, das unbegrenzte Fahrten mit Regionalzügen und allen öffentlichen Verkehrsmitteln in ganz Deutschland ermöglicht.",
      localTransport: "Lokaler Transport",
      busInfo: "Würzburg verfügt über ein umfangreiches Bus- und Straßenbahnnetz. Einzeltickets können an Ticketautomaten an den Haltestellen oder direkt beim Busfahrer gekauft werden. Tageskarten sind ebenfalls erhältlich und können sich lohnen, wenn Sie häufiger mit den öffentlichen Verkehrsmitteln unterwegs sind."
    },
    accommodation: {
      title: "Unterkünfte",
      hotelOptions: "Hoteloptionen",
      alternative: "Alternative Optionen",
      altText: "Die Stadt bietet auch viele Airbnb-Optionen in der Innenstadt und den umliegenden Gebieten. Wir empfehlen eine frühzeitige Buchung, da Juli Hochsaison in Würzburg ist."
    }
  }
};

const TravelPage = ({ currentLang = 'en' }) => {
  const t = translations[currentLang];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Important Dates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            {t.dates.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">{t.dates.wedding}</h3>
              <p>{t.dates.weddingDate}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">{t.dates.arrival}</h3>
              <p>{t.dates.arrivalInfo}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Travel Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plane className="h-5 w-5" />
            {t.travel.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">{t.travel.airports}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Frankfurt Airport (FRA) - 1.5 hours by train</li>
                <li>Nuremberg Airport (NUE) - 2 hours by train</li>
                <li>Munich Airport (MUC) - 3 hours by train</li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Train className="h-5 w-5" />
                <h3 className="font-semibold">{t.travel.deutschlandTicket}</h3>
              </div>
              <p>{t.travel.ticketInfo}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Bus className="h-5 w-5" />
                <h3 className="font-semibold">{t.travel.localTransport}</h3>
              </div>
              <p>{t.travel.busInfo}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accommodations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hotel className="h-5 w-5" />
            {t.accommodation.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">{t.accommodation.hotelOptions}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">Altstadt Hotel</span> - Budget-friendly option in the city center
                </li>
                <li>
                  <span className="font-medium">Barthels Boutique</span> - Mid-range hotel with beautiful city views
                </li>
                <li>
                  <span className="font-medium">Burkardushaus Würzburg</span> - Luxury accommodation with premium amenities
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">{t.accommodation.alternative}</h3>
              <p>{t.accommodation.altText}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TravelPage;
