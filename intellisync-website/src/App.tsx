import Home from "./pages/home/Home";
import About from "./pages/about/About";
import GPTBuilder from './pages/GPTBuilder';
import Pricing from './pages/Pricing/PricingPage';

import PromotionsPage from './pages/promotions/PromotionsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ProductsPage from "./pages/products/ProductsPage";
import DisclaimerPage from "./pages/disclaimer";
import PrivacyPage from "./pages/privacy";
import TermsPage from "./pages/terms";
import WaitlistPage from "./pages/waitlist";
import FAQ from "./pages/FAQ/FAQ";
import ScrollToTop from './components/ScrollToTop';
import MnemosysCaseStudyPage from "./pages/products/mnemosys-case-study";




import { streamModelResponse } from "./lib/streamModelResponse";
import { useLocation } from "react-router-dom";

import { StickyChat } from "./components/StickyChat";
// Helper component to provide eventContext from location
function ChatWithContext() {
  const location = useLocation();
  const getEventContext = (pathname: string) => {
    switch (pathname) {
      case '/about':
        return 'About Page';
      case '/products':
        return 'Products Page';
      case '/promotions':
        return 'Promotions Page';
      case '/gptbuilder':
        return 'GPT Builder';
      case '/pricing':
        return 'Pricing Page';
      case '/waitlist':
        return 'Waitlist Page';
      case '/disclaimer':
        return 'Disclaimer Page';
      case '/privacy':
        return 'Privacy Policy Page';
      case '/terms':
        return 'Terms of Service Page';
      case '/':
        return 'Home Page';
      case '/faq':
        return 'FAQ Page';
      default:
        return `Unknown Route: ${pathname}`;
    }
  };
  const eventContext = getEventContext(location.pathname);
  return <StickyChat onSend={streamModelResponse} eventContext={eventContext} />;
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/mnemosys-case-study" element={<MnemosysCaseStudyPage />} />
          <Route path="/promotions" element={<PromotionsPage />} />
          <Route path="/gptbuilder" element={<GPTBuilder />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/waitlist" element={<WaitlistPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
        {/* StickyChat now gets eventContext from ChatWithContext, which is inside the Router context */}
        <ChatWithContext />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
