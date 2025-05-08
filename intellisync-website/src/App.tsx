import Home from "./pages/home/Home";
import About from "./pages/about/About";
import GPTBuilder from './pages/GPTBuilder';
// Import PromotionsPage directly from the component file to avoid circular dependencies
import PromotionsPage from './pages/promotions/PromotionsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ProductsPage from "./pages/products/ProductsPage";



const Pricing = () => <div className="min-h-screen flex items-center justify-center text-3xl text-accent1">Pricing Page Coming Soon</div>;

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
      case '/':
        return 'Home Page';
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/promotions" element={<PromotionsPage />} />
          <Route path="/gptbuilder" element={<GPTBuilder />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        {/* StickyChat now gets eventContext from ChatWithContext, which is inside the Router context */}
        <ChatWithContext />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
