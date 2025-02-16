import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const translations = {
  en: {
    title: "Contact Us",
    subtitle: "Feel free to reach out with any questions!",
    bride: "Judith",
    groom: "Jonah",
    email: "Email",
    phone: "Phone",
    location: "Location",
    emailPreferred: "Email is our preferred method of contact",
    wurzburg: "Würzburg, Germany"
  },
  de: {
    title: "Kontakt",
    subtitle: "Bei Fragen können Sie uns gerne kontaktieren!",
    bride: "Judith",
    groom: "Jonah",
    email: "E-Mail",
    phone: "Telefon",
    location: "Standort",
    emailPreferred: "E-Mail ist unsere bevorzugte Kontaktmethode",
    wurzburg: "Würzburg, Deutschland"
  }
};

const ContactPage = ({ currentLang = 'en' }) => {
  const t = translations[currentLang];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-display text-center mb-2">{t.title}</h1>
      <p className="text-center text-charcoal-700 mb-12">{t.subtitle}</p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Bride's Contact */}
        <div className="bg-white p-6 shadow-md">
          <h2 className="text-2xl font-display mb-4">{t.bride}</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-sage-400" />
              <div>
                <p className="text-sm text-charcoal-700">{t.email}</p>
                <p>judith@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-sage-400" />
              <div>
                <p className="text-sm text-charcoal-700">{t.phone}</p>
                <p>+49 123 456 789</p>
              </div>
            </div>
          </div>
        </div>

        {/* Groom's Contact */}
        <div className="bg-white p-6 shadow-md">
          <h2 className="text-2xl font-display mb-4">{t.groom}</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-sage-400" />
              <div>
                <p className="text-sm text-charcoal-700">{t.email}</p>
                <p>jonah@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-sage-400" />
              <div>
                <p className="text-sm text-charcoal-700">{t.phone}</p>
                <p>+49 987 654 321</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location and Note */}
      <div className="mt-8 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <MapPin className="h-5 w-5 text-sage-400" />
          <p>{t.wurzburg}</p>
        </div>
        <p className="text-charcoal-700 italic">{t.emailPreferred}</p>
      </div>
    </div>
  );
};

export default ContactPage;
