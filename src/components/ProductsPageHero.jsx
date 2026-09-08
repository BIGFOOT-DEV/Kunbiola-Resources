import { productsHeroBg } from '../assets';
import Navbar from './Navbar';

/**
 * Compact hero banner for the Products page.
 * - Desktop: 465px height (matching Figma node 2089:55)
 * - Mobile: 236px height (matching Figma node 2094:813)
 * - Displays Navbar with active 'products' link and gold "PRODUCTS" heading centered at the bottom of the banner.
 */
export default function ProductsPageHero() {
  return (
    <section
      id="products-top"
      className="relative w-full h-auto overflow-hidden flex flex-col justify-between"
    >
      {/* Background image & Exact color grading gradient overlay matching Landing Page */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src={productsHeroBg}
          alt="Nigerian commodities flat-lay background"
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

      {/* Navbar — top-aligned */}
      <Navbar activePage="products" />

      {/* Page title container — exact 50px gap below navbar */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-[50px] pb-10 sm:pb-12 lg:pb-16 flex flex-col justify-start items-center">
        <h1 className="font-righteous text-accent text-[24px] sm:text-[32px] md:text-[40px] lg:text-[46px] xl:text-[56px] 2xl:text-[64px] leading-[30px] sm:leading-[38px] md:leading-[46px] lg:leading-[1.05] xl:leading-[64px] tracking-normal uppercase text-center w-full z-10 drop-shadow-md">
          PRODUCTS
        </h1>
      </div>
    </section>
  );
}
