import {
  iconWhatsappNav,
  iconPhoneNav,
  iconMailNav,
  iconLocationNav,
} from '../assets';

const contactItems = [
  { icon: iconWhatsappNav, text: '+234 8023229308',                    label: 'WhatsApp', href: 'https://wa.me/2348023229308', isExternal: true },
  { icon: iconPhoneNav,    text: '+234 8034817525',                    label: 'Phone',    href: 'tel:+2348034817525' },
  { icon: iconMailNav,     text: 'Kunbiola.resoures.ltd@gmail.com',    label: 'Email',    href: 'mailto:Kunbiola.resoures.ltd@gmail.com' },
  { icon: iconLocationNav, text: 'No. 27 Igbosere Road, Lagos Island, Lagos.', label: 'Location', isAddress: true, href: 'https://maps.google.com/?q=27+Igbosere+Road,+Lagos+Island,+Lagos,+Nigeria', isExternal: true },
];

/**
 * Contact information + live Google Maps iframe section.
 * Desktop: 2-column grid (contact details | Google Map iframe)
 * Mobile:  Single column (contact details then map)
 */
export default function ContactInfoSection() {
  return (
    <section className="bg-offwhite w-full px-6 py-10 lg:px-24 lg:py-[50px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 w-full max-w-[1248px] mx-auto items-start">

        {/* ── LEFT COLUMN: Contact Details ── */}
        <div className="flex flex-col gap-3">
          {/* Intro text — desktop only */}
          <p className="hidden lg:block font-inter text-primary text-base leading-[26px] mb-1">
            You can contact us through any of these channels…
          </p>

          {/* Contact items */}
          <div className="flex flex-col rounded-[20px] gap-1">
            {contactItems.map((item, i) => (
              <div
                key={i}
                className={`flex gap-3 items-start p-[8px] lg:p-[14px] ${
                  item.isAddress ? 'flex-col' : ''
                }`}
              >
                {item.isAddress ? (
                  /* Location item — has header + address + opening hours stacked */
                  <>
                    {/* LOCATION header row */}
                    <div className="flex gap-2.5 items-center">
                      <img
                        src={item.icon}
                        alt={item.label}
                        className="w-[22px] h-[22px] lg:w-[33px] lg:h-[33px] flex-shrink-0"
                      />
                      <span className="font-inter font-bold text-primary text-sm lg:text-base leading-none">
                        LOCATION
                      </span>
                    </div>
                    {/* Address link */}
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-inter text-muted-green hover:text-primary transition-colors text-xs lg:text-sm leading-[1.5] pl-0"
                    >
                      {item.text}
                    </a>
                    {/* Opening Hours */}
                    <div className="mt-1 lg:mt-2">
                      <p className="font-inter font-bold text-primary text-sm lg:text-base leading-none mb-1.5">
                        OPENING HOURS
                      </p>
                      <p className="font-inter text-muted-green text-xs lg:text-sm leading-[1.5]">
                        Monday – Friday: 8:00 AM – 6:30 PM
                      </p>
                      <p className="font-inter text-muted-green text-xs lg:text-sm leading-[1.5]">
                        Saturday &amp; Sunday: Closed
                      </p>
                    </div>
                  </>
                ) : (
                  /* Standard contact row */
                  <a
                    href={item.href}
                    target={item.isExternal ? '_blank' : undefined}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 group text-primary hover:text-btn-hover transition-colors"
                  >
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="w-[22px] h-[22px] lg:w-[33px] lg:h-[33px] flex-shrink-0 group-hover:scale-110 transition-transform"
                    />
                    <p className="font-inter text-xs lg:text-sm leading-[1.5] break-all font-medium">
                      {item.text}
                    </p>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN: Google Maps iframe ── */}
        <div className="w-full h-[320px] sm:h-[380px] lg:h-[500px] rounded-[20px] overflow-hidden shadow-card border border-primary/10 bg-white">
          <iframe
            title="Kunbiola Resources Ltd Location Map"
            src="https://maps.google.com/maps?q=27+Igbosere+Road,+Lagos+Island,+Lagos,+Nigeria&t=&z=16&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
}
