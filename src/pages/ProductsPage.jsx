import ProductsPageHero   from '../components/ProductsPageHero';
import ProductsGridSection from '../components/ProductsGridSection';
import WhyChooseUs         from '../components/WhyChooseUs';
import Footer              from '../components/Footer';
import { useSEO }          from '../seo/useSEO';
import { SEO }             from '../seo/schemas';

/**
 * Standalone Products page — assembled from reusable components.
 * Matches Figma frames:
 *   Desktop: 2092:299  "PRODUCTS"        (1440 × 2309 px)
 *   Mobile:  2094:812  "PRODUCTS MOBILE" (393  × 3304 px)
 *
 * Sections (top → bottom):
 *   1. ProductsPageHero    — compact hero with flat-lay bg + PRODUCTS title
 *   2. ProductsGridSection — full 15-product grid (offwhite bg)
 *   3. WhyChooseUs         — 4-feature cards (offwhite bg)
 *   4. Footer              — identical to landing page
 */
export default function ProductsPage() {
  useSEO(SEO.products);
  return (
    <div className="w-full min-h-screen">
      <ProductsPageHero />
      <ProductsGridSection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
