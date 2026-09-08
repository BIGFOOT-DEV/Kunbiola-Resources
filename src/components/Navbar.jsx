import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  logo,
  iconWhatsappNav,
  iconPhoneNav,
  iconMailNav,
  iconLocationNav,
} from '../assets';

/**
 * @param {'home'|'products'|'about'|'contact'} activePage - which page is currently active
 */
export default function Navbar({ activePage = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // When on home, section links are anchors; on all other pages, go back to home
  const homeHref = activePage !== 'home' ? '/' : '#home';

  return (
    <>
      {/* ── DESKTOP NAV (lg+) ── */}
      <nav className="relative z-50 hidden lg:flex items-center justify-between w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-6 lg:pt-8">
        {/* Logo */}
        <Link to="/" className="w-[115px] h-[115px] flex-shrink-0 block">
          <img src={logo} alt="Kunbiola Resources Logo" className="w-full h-full object-contain" />
        </Link>

        {/* Right side: contact pill + nav links */}
        <div className="flex flex-col gap-[10px] items-end">
          {/* Contact icons pill */}
          <div className="flex items-center gap-[9px] bg-[rgba(192,215,202,0.61)] px-5 py-3 rounded-[20px]">
            <a
              href="https://wa.me/2348023229308"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              className="hover:scale-110 transition-transform flex items-center justify-center cursor-pointer"
            >
              <img src={iconWhatsappNav} alt="WhatsApp" className="w-[33px] h-[33px]" />
            </a>
            <a
              href="tel:+2348034817525"
              aria-label="Call us"
              className="hover:scale-110 transition-transform flex items-center justify-center cursor-pointer"
            >
              <img src={iconPhoneNav} alt="Phone" className="w-[33px] h-[33px]" />
            </a>
            <a
              href="mailto:Kunbiola.resoures.ltd@gmail.com"
              aria-label="Send us an email"
              className="hover:scale-110 transition-transform flex items-center justify-center cursor-pointer"
            >
              <img src={iconMailNav} alt="Email" className="w-[33px] h-[33px]" />
            </a>
            <a
              href="https://maps.google.com/?q=No.+27+Igbosere+Road,+Lagos+Island,+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View our location on Google Maps"
              className="hover:scale-110 transition-transform flex items-center justify-center cursor-pointer"
            >
              <img src={iconLocationNav} alt="Location" className="w-[33px] h-[33px]" />
            </a>
          </div>

          {/* Nav links matching Figma node 2142:1168 */}
          <div className="flex items-center bg-mint rounded-[20px] pl-2 xl:pl-4">
            <a
              href={homeHref}
              className={`px-4 xl:px-6 py-3 text-primary font-inter text-base xl:text-[20px] whitespace-nowrap transition-all ${
                activePage === 'home' ? 'underline underline-offset-4' : 'hover:opacity-75'
              }`}
            >HOME</a>

            <Link
              to="/products"
              className={`px-4 xl:px-6 py-3 text-primary font-inter text-base xl:text-[20px] whitespace-nowrap transition-all ${
                activePage === 'products' ? 'underline underline-offset-4' : 'hover:opacity-75'
              }`}
            >PRODUCTS</Link>

            <Link
              to="/about"
              className={`px-4 xl:px-6 py-3 text-primary font-inter text-base xl:text-[20px] whitespace-nowrap transition-all ${
                activePage === 'about' ? 'underline underline-offset-4' : 'hover:opacity-75'
              }`}
            >ABOUT US</Link>

            <Link
              to="/contact"
              className={`bg-primary text-offwhite font-inter font-normal text-base xl:text-[24px] px-6 xl:px-8 py-2 xl:py-3 rounded-[20px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] whitespace-nowrap flex items-center justify-center min-w-[180px] xl:w-[292px] h-[50px] xl:h-[60px] hover:brightness-110 active:scale-95 transition-all ${
                activePage === 'contact' ? 'ring-2 ring-offwhite/50' : ''
              }`}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </nav>

      {/* ── MOBILE NAV BAR (< lg) ── */}
      <nav className="relative z-50 flex lg:hidden items-start justify-between w-full px-6 pt-5">
        {/* Logo – matching Figma mobile */}
        <Link to="/" className="w-[70px] h-[70px] flex-shrink-0 block mt-1">
          <img src={logo} alt="Kunbiola Resources Logo" className="w-full h-full object-contain" />
        </Link>

        {/* Right side: contact pill + hamburger button */}
        <div className="flex flex-col items-end gap-2.5">
          {/* Contact icons pill on mobile */}
          <div className="flex items-center gap-2 bg-[rgba(192,215,202,0.61)] px-3 py-1.5 rounded-[20px]">
            <a
              href="https://wa.me/2348023229308"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              className="hover:scale-110 transition-transform flex items-center justify-center cursor-pointer"
            >
              <img src={iconWhatsappNav} alt="WhatsApp" className="w-[20px] h-[20px]" />
            </a>
            <a
              href="tel:+2348034817525"
              aria-label="Call us"
              className="hover:scale-110 transition-transform flex items-center justify-center cursor-pointer"
            >
              <img src={iconPhoneNav} alt="Phone" className="w-[20px] h-[20px]" />
            </a>
            <a
              href="mailto:Kunbiola.resoures.ltd@gmail.com"
              aria-label="Send us an email"
              className="hover:scale-110 transition-transform flex items-center justify-center cursor-pointer"
            >
              <img src={iconMailNav} alt="Email" className="w-[20px] h-[20px]" />
            </a>
            <a
              href="https://maps.google.com/?q=No.+27+Igbosere+Road,+Lagos+Island,+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View our location on Google Maps"
              className="hover:scale-110 transition-transform flex items-center justify-center cursor-pointer"
            >
              <img src={iconLocationNav} alt="Location" className="w-[20px] h-[20px]" />
            </a>
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            className="flex flex-col justify-center items-end gap-[5px] p-1.5 cursor-pointer"
          >
            <span className="block w-6 h-[2.5px] bg-offwhite rounded-full" />
            <span className="block w-6 h-[2.5px] bg-offwhite rounded-full" />
            <span className="block w-6 h-[2.5px] bg-offwhite rounded-full" />
          </button>
        </div>
      </nav>

      {/* ── MOBILE DRAWER OVERLAY ── */}
      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[99] bg-black/40 transition-opacity duration-300 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer panel – slides from right */}
      <div
        className={`fixed top-0 right-0 z-[100] h-full w-[220px] bg-primary flex flex-col py-6 transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Top: logo + close button */}
        <div className="flex items-center justify-between px-6 mb-6">
          <Link to="/" onClick={() => setMenuOpen(false)} className="w-[34px] h-[34px] flex-shrink-0 block">
            <img src={logo} alt="Kunbiola" className="w-full h-full object-contain" />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="text-offwhite text-2xl leading-none p-1 hover:text-mint transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-6 gap-1">
          <a
            href={homeHref}
            onClick={() => setMenuOpen(false)}
            className="font-inter text-offwhite text-sm py-3 border-b border-white/10 hover:text-mint transition-colors"
          >HOME</a>
          <Link
            to="/products"
            onClick={() => setMenuOpen(false)}
            className="font-inter text-offwhite text-sm py-3 border-b border-white/10 hover:text-mint transition-colors"
          >PRODUCTS</Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="font-inter text-offwhite text-sm py-3 border-b border-white/10 hover:text-mint transition-colors"
          >ABOUT US</Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="font-inter text-offwhite text-sm py-3 border-b border-white/10 hover:text-mint transition-colors"
          >CONTACT US</Link>
        </nav>

        {/* Contact icons */}
        <div className="flex items-center gap-4 px-6 mt-6">
          <a
            href="https://wa.me/2348023229308"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:scale-110 transition-transform cursor-pointer"
          >
            <img src={iconWhatsappNav} alt="WhatsApp" className="w-5 h-5" />
          </a>
          <a
            href="tel:+2348034817525"
            aria-label="Phone"
            className="hover:scale-110 transition-transform cursor-pointer"
          >
            <img src={iconPhoneNav} alt="Phone" className="w-5 h-5" />
          </a>
          <a
            href="mailto:Kunbiola.resoures.ltd@gmail.com"
            aria-label="Email"
            className="hover:scale-110 transition-transform cursor-pointer"
          >
            <img src={iconMailNav} alt="Email" className="w-5 h-5" />
          </a>
          <a
            href="https://maps.google.com/?q=No.+27+Igbosere+Road,+Lagos+Island,+Lagos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Location"
            className="hover:scale-110 transition-transform cursor-pointer"
          >
            <img src={iconLocationNav} alt="Location" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </>
  );
}
