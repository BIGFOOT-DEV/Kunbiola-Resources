/**
 * useSEO — Centralised per-page metadata hook.
 *
 * Usage:
 *   import { useSEO } from '../seo/useSEO';
 *   useSEO(SEO.home);
 *
 * Each config object supports:
 *   title        — <title> tag value
 *   description  — meta description
 *   canonical    — canonical href (absolute)
 *   ogImage      — absolute URL to OG image
 *   noIndex      — set true to add noindex
 *   jsonLd       — array of JSON-LD objects (schema.org)
 */

import { useEffect } from 'react';

const SITE_NAME = 'Kunbiola Resources';
const BASE_URL  = 'https://www.kunbiolaresources.com'; // update when live domain is known

/**
 * Apply head metadata imperatively — no external library needed.
 * Helmet-style but zero-dep for meta tags, with JSON-LD injection.
 */
export function useSEO({ title, description, canonical, ogImage, noIndex = false, jsonLd = [] }) {
  useEffect(() => {
    /* ── Title ── */
    document.title = title;

    /* ── Helper: upsert a <meta> tag ── */
    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrVal] = selector.replace('meta[', '').replace(']', '').replace(/"/g, '').split('=');
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    /* ── Helper: upsert a <link> tag ── */
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    /* ── Meta description ── */
    if (description) {
      setMeta('meta[name="description"]', 'content', description);
    }

    /* ── Robots ── */
    setMeta('meta[name="robots"]', 'content', noIndex ? 'noindex,nofollow' : 'index,follow');

    /* ── Open Graph ── */
    setMeta('meta[property="og:title"]',       'content', title);
    setMeta('meta[property="og:description"]', 'content', description ?? '');
    setMeta('meta[property="og:type"]',        'content', 'website');
    setMeta('meta[property="og:site_name"]',   'content', SITE_NAME);
    if (canonical) {
      setMeta('meta[property="og:url"]', 'content', canonical);
    }
    if (ogImage) {
      setMeta('meta[property="og:image"]', 'content', ogImage);
    }

    /* ── Twitter Card ── */
    setMeta('meta[name="twitter:card"]',        'content', 'summary_large_image');
    setMeta('meta[name="twitter:title"]',       'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description ?? '');
    if (ogImage) {
      setMeta('meta[name="twitter:image"]', 'content', ogImage);
    }

    /* ── Canonical ── */
    if (canonical) {
      setLink('canonical', canonical);
    }

    /* ── JSON-LD ── */
    // Remove any previously injected JSON-LD scripts
    document.querySelectorAll('script[data-seo="true"]').forEach((s) => s.remove());
    jsonLd.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo', 'true');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    /* ── Cleanup on unmount ── */
    return () => {
      document.querySelectorAll('script[data-seo="true"]').forEach((s) => s.remove());
    };
  }, [title, description, canonical, ogImage, noIndex, jsonLd]);
}

export { BASE_URL, SITE_NAME };
