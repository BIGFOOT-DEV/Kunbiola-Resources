import AboutPageHero      from '../components/AboutPageHero';
import AboutContentSection from '../components/AboutContentSection';
import WhyChooseUs         from '../components/WhyChooseUs';
import Footer              from '../components/Footer';
import { useSEO }          from '../seo/useSEO';
import { SEO }             from '../seo/schemas';

/**
 * Standalone About Us page — assembled from reusable components.
 * Matches Figma frames:
 *   Desktop: 2094:630  "ABOUT US PC"     (1440 × 2185 px)
 *   Mobile:  2094:524  "ABOUT US MOBILE" (393  × 2351 px)
 *
 * Sections (top → bottom):
 *   1. AboutPageHero       — compact hero banner with farmland bg + ABOUT US title & truck/globe graphic
 *   2. AboutContentSection — narrative overview, facility photo, OUR MISSION, and OUR VISION
 *   3. WhyChooseUs         — 4-feature cards (offwhite bg)
 *   4. Footer              — site footer
 */
export default function AboutPage() {
  useSEO(SEO.about);
  return (
    <div className="w-full min-h-screen">
      <AboutPageHero />
      <AboutContentSection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
