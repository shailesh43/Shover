import { Hero01 } from '@/components/hero-01';
import Page from './(home)/page';

export default function Home() {
  return (
    <main className="w-full">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <Hero01 />
      </div>
    </main>
  );
}