import FeaturesSection from './sections/feature-section';
import HeroSection from './sections/hero-section';
import FAQSection from './sections/faq-section';
import ContributeSection2 from './sections/contribute-section';

export default function HomePage() {
  return (
    <div className="flex flex-col mx-auto min-h-screen sm:px-6">
      <HeroSection />
      <FeaturesSection />
      <ContributeSection2 />
      <FAQSection />
    </div>
  );
}
