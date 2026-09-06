import { Link } from 'react-router-dom';
import { useQuoteModal } from '../context/QuoteModalContext';
import { heroBg, heroTruckGlobe } from '../assets';
import Navbar from './Navbar';

export default function HeroSection() {
  const { openModal } = useQuoteModal();

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-between"
    >
      {/* Background image */}
      <img
        src={heroBg}
        alt="Lush Nigerian farmland — agricultural commodities ready for export"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.21) 39.79%, rgba(51,51,51,0.78) 58.83%, rgba(30,30,30,0.80) 67.71%)',
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 xl:px-24 pt-28 sm:pt-36 lg:pt-40 pb-12 lg:pb-24 gap-8 lg:gap-12">
        {/* Left / Top: text + CTAs */}
        <div className="flex flex-col gap-6 lg:gap-10 flex-shrink-0 w-full lg:w-1/2 max-w-[600px]">
          {/* Headline */}
          <h1
            className="font-righteous text-accent leading-tight lg:leading-tight text-left text-2xl sm:text-4xl lg:text-[clamp(36px,5.5vw,96px)]"
          >
            NIGERIA'S FINEST COMMODITIES, DELIVERED GLOBALLY
          </h1>

          {/* Subtext */}
          <p className="font-inter text-offwhite text-sm sm:text-base lg:text-lg leading-relaxed text-left">
            From cashew nuts to cocoa, sesame seeds to minerals, Kunbiola connects local
            producers to international buyers with unmatched reliability.
          </p>

          {/* CTA buttons - side by side */}
          <div className="flex flex-row gap-3 sm:gap-6 w-full sm:w-[420px]">
            <Link
              to="/products"
              className="flex-1 h-[44px] sm:h-[48px] lg:h-[52px] flex items-center justify-center border border-offwhite rounded-[20px] shadow-card text-offwhite font-inter text-xs sm:text-sm lg:text-base whitespace-nowrap hover:bg-white/10 transition-colors"
            >
              PRODUCTS
            </Link>
            <button
              type="button"
              onClick={openModal}
              className="flex-1 h-[44px] sm:h-[48px] lg:h-[52px] flex items-center justify-center bg-primary rounded-[20px] shadow-btn text-offwhite font-inter text-xs sm:text-sm lg:text-base whitespace-nowrap hover:bg-btn-hover transition-colors cursor-pointer"
            >
              REQUEST A QUOTE
            </button>
          </div>
        </div>

        {/* Right / Bottom: truck + globe composite — visible on mobile & desktop matching Figma */}
        <div className="flex items-center justify-center w-full max-w-[290px] sm:max-w-[420px] lg:max-w-[580px] xl:max-w-[650px] relative mx-auto lg:ml-auto mt-2 lg:mt-0">
          <img
            src={heroTruckGlobe}
            alt="Kunbiola Resources delivery truck with globe — global commodity export from Nigeria"
            className="w-full h-auto object-contain pointer-events-none select-none drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
