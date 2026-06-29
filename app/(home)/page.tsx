import FeaturesSection from './sections/feature-section';
import HeroSection from './sections/hero-section';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}
