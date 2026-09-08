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
      className="relative w-full h-auto lg:h-[465px] min-h-[236px] overflow-hidden flex flex-col justify-between"
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
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-[50px] pb-6 sm:pb-8 lg:pb-12 flex-1 flex items-center justify-center">
        <h1
          className="font-righteous text-accent leading-none text-center tracking-wide w-full"
          style={{
            fontSize: 'clamp(36px, 7vw, 96px)',
            textShadow: '0px 4px 12px rgba(0,0,0,0.6)',
          }}
        >
          PRODUCTS
        </h1>
      </div>
    </section>
  );
}
