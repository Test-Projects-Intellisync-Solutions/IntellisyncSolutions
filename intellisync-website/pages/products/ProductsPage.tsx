import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import CustomCTA from "../home/CustomCTA";
import AIDrivenSolutions from "./AIDrivenSolutions";
import TechnologyCapabilities from "./TechnologyCapabilities";
import CaseStudies from "./CaseStudies";
import Products from "./Products";


export default function ProductsPage() {
  return (
    <>
      <Header />
      {/* AI-Driven Solutions Section */}
      <AIDrivenSolutions />
      
      {/* Technology Capabilities Section */}
      <TechnologyCapabilities />
      
      {/* Case Studies Section */}
      <CaseStudies />

      {/* Products & Services Listing */}
      <Products />
      {/* Shared CTA */}
      <CustomCTA />
      <Footer />
    </>
  );
}
