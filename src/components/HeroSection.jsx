import { Link } from 'react-router-dom';
import { useQuoteModal } from '../context/QuoteModalContext';
import { heroBg, heroTruckGlobe } from '../assets';
import Navbar from './Navbar';

/**
 * HeroSection component built to exact Figma specifications:
 * - Desktop (Figma node 2035:502, 1440x900):
 *   - Heading: Righteous 64px, #D1A24E (ACCENT COLOUR), leading-64px
 *   - Subtext: Inter 24px, #F7F7F7, leading-32px, max-w-[508px]
 *   - CTAs: PRODUCTS (border-white, 290x60, rounded-20px) + REQUEST A QUOTE (bg-[#374C3B], 290x60, rounded-20px, shadow)
 *   - Graphic: Hero Truck + Globe composite (604x543)
 * - Mobile (Figma node 2067:1242, 393x852):
 *   - Heading: Righteous 26-30px, #D1A24E
 *   - Subtext: Inter 14px, #F7F7F7, leading-20px
 *   - CTAs: PRODUCTS + REQUEST A QUOTE side by side (h-48px, rounded-20px)
 *   - Graphic: Truck + Globe (290x261) centered at bottom
 */
export default function HeroSection() {
  const { openModal } = useQuoteModal();

  return (
    <section
      id="home"
      className="relative w-full h-auto xl:h-screen xl:max-h-[955px] flex flex-col justify-between overflow-hidden"
    >
      {/* ── Background Farmland Image & Exact Gradient Overlay ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src={heroBg}
          alt="Agricultural farmland"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.21) 39.79%, rgba(51,51,51,0.78) 58.83%, rgba(30,30,30,0.80) 67.71%)',
          }}
        />
      </div>

      {/* ── Navbar ── */}
      <Navbar activePage="home" />

      {/* ── Hero Content (Exact 50px gap on both mobile & desktop from navbar) ── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-24 pt-[50px] pb-12 sm:pb-14 md:pb-16 lg:pb-12 xl:pb-8 flex flex-col justify-start xl:justify-between flex-1">
        
        {/* Main hero body container */}
        <div className="relative flex flex-col lg:flex-row items-start lg:items-end justify-between w-full gap-[50px] md:gap-10 lg:gap-0 mt-0 xl:mt-[50px] mb-0 xl:mb-2">
          
          {/* Left Column: Heading, Subtext, Action Buttons (16px gap mobile, 48px gap desktop) */}
          <div className="flex flex-col gap-[16px] sm:gap-6 md:gap-8 lg:gap-[28px] w-full max-w-full lg:max-w-[989px] z-10">
            
            {/* Headline matching Figma node 2035:509 (989px desktop) & 2067:1249 (345px mobile) */}
            <h1 className="font-righteous text-accent text-[24px] sm:text-[32px] md:text-[40px] lg:text-[46px] xl:text-[56px] 2xl:text-[64px] leading-[30px] sm:leading-[38px] md:leading-[46px] lg:leading-[1.05] xl:leading-[64px] tracking-normal uppercase text-left w-full max-w-[345px] sm:max-w-[540px] md:max-w-[680px] lg:max-w-[989px] lg:w-[989px]">
              NIGERIA’S FINEST COMMODITIES, DELIVERED GLOBALLY
            </h1>

            {/* Subtext matching Figma node 2035:510 & 2067:1250 */}
            <p className="font-inter text-offwhite text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[24px] leading-[22px] sm:leading-[24px] md:leading-[25px] lg:leading-[26px] xl:leading-[30px] 2xl:leading-[32px] max-w-[508px] text-justify sm:text-left">
              From cashew nuts to cocoa, sesame seeds to minerals, Kunbiola connects local producers to international buyers with unmatched reliability.
            </p>

            {/* Action Buttons Row matching Figma node 2035:511 & 2067:1251 */}
            <div className="flex flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-[24px] w-full max-w-[345px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[613px]">
              <Link
                to="/products"
                className="flex-1 h-[46px] sm:h-[48px] md:h-[52px] lg:h-[56px] xl:h-[60px] lg:w-[290px] p-[8px] flex items-center justify-center border border-[#F7F7F7] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-[#F7F7F7] font-inter font-normal text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px] whitespace-nowrap hover:bg-white/10 active:scale-95 transition-all"
              >
                PRODUCTS
              </Link>
              <button
                type="button"
                onClick={openModal}
                className="flex-1 h-[46px] sm:h-[48px] md:h-[52px] lg:h-[56px] xl:h-[60px] lg:w-[290px] p-[8px] flex items-center justify-center bg-[#374C3B] rounded-[20px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] text-[#F7F7F7] font-inter font-normal text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px] whitespace-nowrap hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                REQUEST A QUOTE
              </button>
            </div>
          </div>

          {/* Right Column (Desktop) / Bottom Graphic (Mobile/Tablet): Truck & Globe Picture 2 */}
          <div className="w-full max-w-[290px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[440px] xl:max-w-[540px] 2xl:max-w-[604px] lg:absolute lg:right-0 lg:bottom-0 flex items-center justify-center lg:justify-end mx-auto lg:mx-0 self-center lg:self-end flex-shrink-0 pointer-events-none select-none">
            <img
              src={heroTruckGlobe}
              alt="Global logistics delivery truck and globe"
              className="w-full h-auto max-h-[260px] sm:max-h-[300px] md:max-h-[360px] lg:max-h-[44vh] xl:max-h-[50vh] 2xl:max-h-[543px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
