import ContactPageHero    from '../components/ContactPageHero';
import ContactInfoSection from '../components/ContactInfoSection';
import Footer             from '../components/Footer';
import { useSEO }         from '../seo/useSEO';
import { SEO }            from '../seo/schemas';

/**
 * Standalone Contact Us page — assembled from reusable components.
 * Matches Figma frames:
 *   Desktop: 2119:2274  "contact us"        (1440px wide)
 *   Mobile:  2142:1244  "contact us MOBILE" (393px wide)
 *
 * Sections (top → bottom):
 *   1. ContactPageHero    — compact hero banner with farmland bg + CONTACT US title & truck/globe graphic
 *   2. ContactInfoSection — contact channels, opening hours, and Google Maps iframe
 *   3. Footer             — site footer
 */
export default function ContactPage() {
  useSEO(SEO.contact);
  return (
    <div className="w-full min-h-screen">
      <ContactPageHero />
      <ContactInfoSection />
      <Footer />
    </div>
  );
}
