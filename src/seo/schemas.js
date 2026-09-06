/**
 * schemas.js — Reusable JSON-LD schema.org objects for Kunbiola Resources.
 *
 * References:
 *   https://schema.org/Organization
 *   https://schema.org/WebSite
 *   https://schema.org/BreadcrumbList
 */

const BASE_URL = 'https://www.kunbiolaresources.com';

/* ── Organization ─────────────────────────────────────────────────── */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kunbiola Resources',
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.svg`,
  description:
    'Kunbiola Resources sources, supplies and exports quality agricultural and mineral commodities from Nigeria to domestic and international markets.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NG',
    addressRegion: 'Lagos',
    addressLocality: 'Lagos',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'kunbiolaresources@gmail.com',
    availableLanguage: ['English'],
  },
  sameAs: [],
};

/* ── WebSite (with SearchAction for sitelinks search box) ───────────── */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Kunbiola Resources',
  url: BASE_URL,
};

/* ── BreadcrumbList factory ─────────────────────────────────────────── */
/**
 * @param {Array<{name: string, item: string}>} crumbs
 * e.g. breadcrumbSchema([{ name: 'Home', item: '/' }, { name: 'Products', item: '/products' }])
 */
export function breadcrumbSchema(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${BASE_URL}${crumb.item}`,
    })),
  };
}

/* ── Per-page SEO configurations ────────────────────────────────────── */
export const SEO = {
  home: {
    title: 'Agricultural & Mineral Commodities from Nigeria | Kunbiola Resources',
    description:
      'Kunbiola Resources sources, supplies and exports quality agricultural and mineral commodities from Nigeria to domestic and international markets. Request a quote today.',
    canonical: `${BASE_URL}/`,
    jsonLd: [organizationSchema, websiteSchema],
  },

  products: {
    title: 'Our Products — Nigerian Agricultural & Mineral Commodities | Kunbiola Resources',
    description:
      'Explore our full catalogue of Nigerian commodities: ginger, cocoa, sesame seeds, cashew nuts, gum arabic, shea butter, iron ore, copper, lead ore and more. Reliable sourcing and export.',
    canonical: `${BASE_URL}/products`,
    jsonLd: [
      organizationSchema,
      breadcrumbSchema([
        { name: 'Home', item: '/' },
        { name: 'Products', item: '/products' },
      ]),
    ],
  },

  about: {
    title: 'About Us — Trusted Nigerian Commodity Exporter | Kunbiola Resources',
    description:
      'Learn how Kunbiola Resources connects Nigerian farmers and miners to global buyers. Our mission is to deliver quality commodities with transparency and reliability.',
    canonical: `${BASE_URL}/about`,
    jsonLd: [
      organizationSchema,
      breadcrumbSchema([
        { name: 'Home', item: '/' },
        { name: 'About Us', item: '/about' },
      ]),
    ],
  },

  contact: {
    title: 'Contact Us — Get in Touch with Kunbiola Resources',
    description:
      'Reach out to Kunbiola Resources for commodity sourcing enquiries, export partnerships, or to request a quote. We are based in Nigeria and serve global markets.',
    canonical: `${BASE_URL}/contact`,
    jsonLd: [
      organizationSchema,
      breadcrumbSchema([
        { name: 'Home', item: '/' },
        { name: 'Contact Us', item: '/contact' },
      ]),
    ],
  },
};
