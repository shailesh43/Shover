import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={[{ text: 'Documentation', url: '/docs' }, { text: 'Components', url: '/docs/components/apple-hello' }, { text: 'Layouts', url: '/docs/layouts/hero-section' }]}
    >
      {children}
    </HomeLayout>
  );
}