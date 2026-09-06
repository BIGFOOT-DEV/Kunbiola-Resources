import { heroBg, heroTruckGlobe } from '../assets';
import Navbar from './Navbar';

/**
 * Hero banner for the Contact Us page.
 * - Desktop: 465px height
 * - Mobile:  236px height
 * - Displays Navbar with active 'contact' link, gold "CONTACT US" heading, and truck/globe graphic.
 */
export default function ContactPageHero() {
  return (
    <section
      id="contact-top"
      className="relative w-full h-[236px] lg:h-[465px] overflow-hidden bg-primary"
    >
      {/* Background image */}
      <img
        src={heroBg}
        alt="Nigerian farmland background"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.21) 0%, rgba(51,51,51,0.78) 79%, rgba(30,30,30,0.8) 100%)',
        }}
      />

      {/* Navbar — top aligned */}
      <Navbar activePage="contact" />

      {/* Page Title + Truck Globe Graphic — pinned near bottom */}
      <div className="absolute bottom-2 lg:bottom-8 left-0 right-0 z-10 px-6 lg:px-24 flex items-end justify-center pointer-events-none">
        <div className="relative flex items-center justify-center gap-4 lg:gap-8 w-full max-w-[1248px]">
          {/* Gold Righteous Title */}
          <h1
            className="font-righteous text-accent leading-none text-center tracking-wide"
            style={{
              fontSize: 'clamp(36px, 7vw, 96px)',
              textShadow: '0px 4px 4px rgba(0,0,0,0.25)',
            }}
          >
            CONTACT US
          </h1>

          {/* Truck + Globe graphic */}
          <div className="w-[80px] h-[70px] sm:w-[120px] sm:h-[100px] lg:w-[260px] lg:h-[200px] flex-shrink-0 relative">
            <img
              src={heroTruckGlobe}
              alt="Kunbiola Logistics Truck and Globe"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
