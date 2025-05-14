import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PricingHero from './PricingHero';
import PlanTable from './PlanTable';
import BankedHours from './BankedHours';
import DiscountOptions from './DiscountOptions';
import HourlyRates from './HourlyRates';
import UseCases from './UseCases';
import CTA from './CTA';

const PricingPage = () => (
  <>
    <Header />
    <main className="bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946] min-h-screen">
      <PricingHero />
      <PlanTable />
      <div className="max-w-5xl mx-auto px-4">
        <BankedHours />
        <DiscountOptions />
        <HourlyRates />
        <UseCases />
      </div>
      <CTA />
    </main>
    <Footer />
  </>
);

export default PricingPage;
