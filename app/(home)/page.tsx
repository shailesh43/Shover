import FeaturesSection from './sections/feature-section';
import HeroSection from './sections/hero-section';
import FAQSection from './sections/faq-section';
import ContributeSection2 from './sections/contribute-section';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 md:gap-24 max-w-7xl mx-auto px-6 md:px-8">
      <HeroSection />
      <FeaturesSection />
      <ContributeSection2 />
      <FAQSection />
    </div>
  );
}
