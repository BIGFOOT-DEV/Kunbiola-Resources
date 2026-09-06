import { Link } from 'react-router-dom';
import { useQuoteModal } from '../context/QuoteModalContext';
import {
  footerLogo,
  navIconHome, navIconProducts, navIconAbout1, navIconAbout2, navIconAbout3, navIconContact,
  iconWhatsappFoot, iconPhoneFoot, iconMailFoot, iconLocationFoot,
} from '../assets';

const contactItems = [
  { icon: iconWhatsappFoot, text: '+234 8023229308', href: 'https://wa.me/2348023229308', isExternal: true },
  { icon: iconPhoneFoot,    text: '+234 8034817525', href: 'tel:+2348034817525' },
  { icon: iconMailFoot,     text: 'Kunbiola.resoures.ltd@gmail.com', href: 'mailto:Kunbiola.resoures.ltd@gmail.com' },
  { icon: iconLocationFoot, text: 'No. 27 Igbosere Road, Lagos Island, Lagos.', href: 'https://maps.google.com/?q=No.+27+Igbosere+Road,+Lagos+Island,+Lagos', isExternal: true },
];

export default function Footer() {
  const { openModal } = useQuoteModal();
  return (
    <footer id="contact" className="bg-primary w-full text-offwhite border-t border-white/5">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-8 lg:py-16">
        
        {/* ── DESKTOP LAYOUT (lg+) ── */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          {/* Col 1: Logo & Tagline (lg:col-span-3) */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <Link to="/" className="w-[180px] lg:w-[213px] h-auto block">
              <img src={footerLogo} alt="Kunbiola Resources" className="w-full h-auto object-contain" />
            </Link>
            <p className="font-inter text-mint/80 text-xs sm:text-sm leading-relaxed max-w-[280px]">
              Nigeria's finest agricultural commodities and mineral resources, delivered globally.
            </p>
          </div>

          {/* Col 2: Quick Links (lg:col-span-3) */}
          <div className="flex flex-col gap-3 lg:col-span-3">
            <p className="font-inter font-bold text-offwhite text-sm sm:text-base tracking-wider uppercase">
              QUICK LINKS
            </p>
            <nav className="flex flex-col gap-1 font-inter text-offwhite/90 text-sm sm:text-base">
              <Link to="/" className="flex items-center gap-2.5 py-1.5 hover:text-accent hover:translate-x-1 transition-all rounded-lg">
                <img src={navIconHome} alt="" className="w-5 h-5 flex-shrink-0" />
                <span>HOME</span>
              </Link>
              <Link to="/products" className="flex items-center gap-2.5 py-1.5 hover:text-accent hover:translate-x-1 transition-all rounded-lg">
                <img src={navIconProducts} alt="" className="w-5 h-5 flex-shrink-0" />
                <span>PRODUCTS</span>
              </Link>
              <Link to="/about" className="flex items-center gap-2.5 py-1.5 hover:text-accent hover:translate-x-1 transition-all rounded-lg">
                <div className="relative w-5 h-5 flex-shrink-0">
                  <img src={navIconAbout1} alt="" className="absolute top-0 left-[10px] w-[10px]" />
                  <img src={navIconAbout2} alt="" className="absolute top-0 left-0 w-[10px]" />
                  <img src={navIconAbout3} alt="" className="absolute bottom-0 left-[4px] w-[12px]" />
                </div>
                <span>ABOUT US</span>
              </Link>
              <Link to="/contact" className="flex items-center gap-2.5 py-1.5 hover:text-accent hover:translate-x-1 transition-all rounded-lg">
                <img src={navIconContact} alt="" className="w-5 h-5 flex-shrink-0" />
                <span>CONTACT US</span>
              </Link>
            </nav>
          </div>

          {/* Col 3: Contact info (lg:col-span-3) */}
          <div className="flex flex-col gap-3 lg:col-span-3">
            <p className="font-inter font-bold text-offwhite text-sm sm:text-base tracking-wider uppercase">
              CONTACT
            </p>
            <div className="flex flex-col gap-2 font-inter text-offwhite/90 text-xs sm:text-sm lg:text-base">
              {contactItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-2.5 py-1 hover:text-accent transition-colors group"
                >
                  <img src={item.icon} alt="" className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="leading-snug break-words">{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 4: CTA button (lg:col-span-3) */}
          <div className="flex flex-col gap-4 lg:col-span-3 items-start lg:items-end justify-start pt-2 lg:pt-0">
            <button
              type="button"
              onClick={openModal}
              className="w-full sm:w-[210px] h-[48px] flex items-center justify-center bg-btn-hover rounded-[20px] shadow-footer-btn hover:brightness-110 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              <span className="font-inter font-bold text-offwhite text-sm sm:text-base whitespace-nowrap">
                REQUEST A QUOTE
              </span>
            </button>
          </div>
        </div>

        {/* ── MOBILE & TABLET LAYOUT (< lg, matching Figma 2197:4380) ── */}
        <div className="flex lg:hidden flex-col gap-6">
          {/* Logo */}
          <Link to="/" className="w-[149px] h-[33px] block">
            <img src={footerLogo} alt="Kunbiola Resources" className="w-full h-full object-contain" />
          </Link>

          {/* Quick Links + Contact side by side */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 items-start">
            {/* Quick Links Column */}
            <div className="flex flex-col gap-2">
              <p className="font-inter font-bold text-offwhite text-xs sm:text-sm whitespace-nowrap">
                QUICK LINKS
              </p>
              <nav className="flex flex-col gap-1">
                <Link to="/" className="flex items-center gap-2 py-1 text-offwhite hover:text-accent transition-colors">
                  <img src={navIconHome} alt="" className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="font-inter text-[11px] sm:text-xs leading-none whitespace-nowrap">HOME</span>
                </Link>
                <Link to="/products" className="flex items-center gap-2 py-1 text-offwhite hover:text-accent transition-colors">
                  <img src={navIconProducts} alt="" className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="font-inter text-[11px] sm:text-xs leading-none whitespace-nowrap">PRODUCTS</span>
                </Link>
                <Link to="/about" className="flex items-center gap-2 py-1 text-offwhite hover:text-accent transition-colors">
                  <div className="relative w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
                    <img src={navIconAbout1} alt="" className="absolute top-0 left-[8px] w-[8px]" />
                    <img src={navIconAbout2} alt="" className="absolute top-0 left-0 w-[8px]" />
                    <img src={navIconAbout3} alt="" className="absolute bottom-0 left-[3px] w-[10px]" />
                  </div>
                  <span className="font-inter text-[11px] sm:text-xs leading-none whitespace-nowrap">ABOUT US</span>
                </Link>
                <Link to="/contact" className="flex items-center gap-2 py-1 text-offwhite hover:text-accent transition-colors">
                  <img src={navIconContact} alt="" className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="font-inter text-[11px] sm:text-xs leading-none whitespace-nowrap">CONTACT US</span>
                </Link>
              </nav>
            </div>

            {/* Contact Info Column */}
            <div className="flex flex-col gap-2">
              <p className="font-inter font-bold text-offwhite text-xs sm:text-sm whitespace-nowrap">
                CONTACT
              </p>
              <div className="flex flex-col gap-1.5">
                {contactItems.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.isExternal ? '_blank' : undefined}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-2 py-0.5 text-offwhite hover:text-accent transition-colors"
                  >
                    <img src={item.icon} alt="" className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-[11px] sm:text-xs leading-[14px] break-words">{item.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* REQUEST A QUOTE – Full width button */}
          <button
            type="button"
            onClick={openModal}
            className="w-full h-[44px] flex items-center justify-center bg-btn-hover rounded-[20px] shadow-footer-btn hover:brightness-110 active:scale-95 transition-all cursor-pointer mt-1"
          >
            <span className="font-inter font-bold text-offwhite text-sm whitespace-nowrap">
              REQUEST A QUOTE
            </span>
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-white/10 mt-8 lg:mt-12 pt-6 text-center text-xs text-mint/60 font-inter">
          &copy; {new Date().getFullYear()} Kunbiola Resources Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
