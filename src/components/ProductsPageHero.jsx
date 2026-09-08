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
      className="relative w-full h-[236px] lg:h-[465px] overflow-hidden"
    >
      {/* Background image */}
      <img
        src={productsHeroBg}
        alt="Nigerian commodities flat-lay background"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      />

      {/* Exact color grading gradient overlay matching Landing Page */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.21) 39.79%, rgba(51,51,51,0.78) 58.83%, rgba(30,30,30,0.80) 67.71%)',
        }}
      />

      {/* Navbar — top-aligned */}
      <Navbar activePage="products" />

      {/* Page title — pinned near bottom of hero banner below navbar */}
      <div className="absolute bottom-4 lg:bottom-10 left-0 right-0 z-10 flex items-center justify-center pointer-events-none">
        <h1
          className="font-righteous text-accent leading-none text-center tracking-wide"
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
