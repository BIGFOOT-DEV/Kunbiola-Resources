import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Landing-page sections
import HeroSection    from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import HowWeDeliver   from './components/HowWeDeliver';
import WhyChooseUs    from './components/WhyChooseUs';
import Footer         from './components/Footer';

// Standalone pages
import ProductsPage   from './pages/ProductsPage';
import AboutPage      from './pages/AboutPage';
import ContactPage    from './pages/ContactPage';

// Context & Modals
import { QuoteModalProvider } from './context/QuoteModalContext';
import RequestAQuoteModal from './components/RequestAQuoteModal';

// SEO
import { useSEO } from './seo/useSEO';
import { SEO } from './seo/schemas';

/** Automatically scroll to top on route change or to hash element */
function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

/** Landing page assembled from sections */
function LandingPage() {
  useSEO(SEO.home);
  return (
    <div className="w-full min-h-screen">
      <HeroSection />
      <ProductsSection />
      <HowWeDeliver />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
export default function App() {
  return (
    <QuoteModalProvider>
      <BrowserRouter>
        <ScrollHandler />
        <Routes>
          <Route path="/"         element={<LandingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about"    element={<AboutPage />} />
          <Route path="/contact"  element={<ContactPage />} />
        </Routes>
        <RequestAQuoteModal />
      </BrowserRouter>
    </QuoteModalProvider>
  );
}
