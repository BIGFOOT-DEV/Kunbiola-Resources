import { heroBg, heroTruckGlobe } from '../assets';
import Navbar from './Navbar';

/**
 * Hero banner for the About Us page.
 * - Desktop: 465px height (matching Figma node 2094:631)
 * - Mobile: 236px height (matching Figma node 2094:525)
 * - Displays Navbar with active 'about' link, gold "ABOUT US" heading, and truck/globe graphic.
 */
export default function AboutPageHero() {
  return (
    <section
      id="about-top"
      className="relative w-full h-[236px] lg:h-[465px] overflow-hidden flex flex-col justify-between"
    >
      {/* Background image & Exact color grading gradient overlay matching Landing Page */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src={heroBg}
          alt="Nigerian farmland background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.21) 39.79%, rgba(51,51,51,0.78) 58.83%, rgba(30,30,30,0.80) 67.71%)',
          }}
        />
      </div>

      {/* Navbar — top aligned */}
      <Navbar activePage="about" />

      {/* Page Title Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-0 lg:pt-[50px] pb-6 sm:pb-8 lg:pb-12 flex-1 flex items-center justify-center">
        <h1
          className="font-righteous text-accent leading-none text-center tracking-wide w-full z-10"
          style={{
            fontSize: 'clamp(36px, 7vw, 96px)',
            textShadow: '0px 4px 12px rgba(0,0,0,0.6)',
          }}
        >
          ABOUT US
        </h1>
      </div>

      {/* Truck + Globe graphic — positioned at bottom right of hero section */}
      <div className="absolute right-2 sm:right-6 lg:right-16 xl:right-24 bottom-1 sm:bottom-3 lg:bottom-6 w-[110px] h-[99px] sm:w-[155px] sm:h-[140px] md:w-[200px] md:h-[180px] lg:w-[290px] lg:h-[261px] flex-shrink-0 pointer-events-none select-none z-10">
        <img
          src={heroTruckGlobe}
          alt="Kunbiola Logistics Truck and Globe"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}
