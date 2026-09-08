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
      className="relative w-full h-auto overflow-hidden flex flex-col justify-between"
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
      <Navbar activePage="contact" />

      {/* Page Title Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 flex flex-col justify-start">
        <div className="relative w-full max-w-[1248px] mx-auto flex items-center justify-center min-h-[81px] lg:min-h-[234px]">
          <h1 className="font-righteous text-accent text-[24px] sm:text-[32px] md:text-[40px] lg:text-[46px] xl:text-[56px] 2xl:text-[64px] leading-[30px] sm:leading-[38px] md:leading-[46px] lg:leading-[1.05] xl:leading-[64px] tracking-normal uppercase text-center w-full z-10 drop-shadow-md">
            CONTACT US
          </h1>

          {/* Truck + Globe graphic — prominent beside h1 text without shifting center */}
          <div className="absolute right-0 sm:right-4 md:right-8 lg:right-12 xl:right-16 top-1/2 -translate-y-1/2 w-[90px] h-[81px] sm:w-[130px] sm:h-[117px] md:w-[160px] md:h-[144px] lg:w-[220px] lg:h-[198px] xl:w-[260px] xl:h-[234px] flex-shrink-0 pointer-events-none select-none z-20">
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
