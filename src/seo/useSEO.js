import { useEffect } from 'react';

/**
 * Custom hook to dynamically update page document title, meta description,
 * canonical link, and JSON-LD structured data.
 *
 * @param {Object} config
 * @param {string} config.title - The page title
 * @param {string} [config.description] - Meta description
 * @param {string} [config.canonical] - Canonical URL
 * @param {Array<Object>} [config.jsonLd] - Array of Schema.org JSON-LD objects
 */
export function useSEO({ title, description, canonical, jsonLd } = {}) {
  useEffect(() => {
    // 1. Update Document Title
    if (title) {
      document.title = title;
    }

    // 2. Update Meta Description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);

      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', description);
      }
    }

    // 3. Update Canonical Link
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }

    // 4. Update OpenGraph Title & URL
    if (title) {
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', title);
    }
    if (canonical) {
      let ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute('content', canonical);
    }

    // 5. Inject / Update Dynamic JSON-LD Structured Data
    if (jsonLd && Array.isArray(jsonLd) && jsonLd.length > 0) {
      let scriptTag = document.getElementById('dynamic-jsonld');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'dynamic-jsonld';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(
        jsonLd.length === 1 ? jsonLd[0] : { '@context': 'https://schema.org', '@graph': jsonLd }
      );
    }

    return () => {
      // Optional cleanup when unmounting
      const scriptTag = document.getElementById('dynamic-jsonld');
      if (scriptTag) {
        scriptTag.remove();
      }
    };
  }, [title, description, canonical, jsonLd]);
}
