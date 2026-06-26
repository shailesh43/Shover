import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { ShoverBrand } from '@/components/shover-brand';
import { gitConfig } from './shared';
import { ComponentIcon } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: <ShoverBrand />,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}

export function homeOptions(): BaseLayoutProps {
  return {
    links: [
      {
        text: 'Docs',
        url: '/docs',
        // secondary items will be displayed differently on navbar
        secondary: false,
      },
      {
        icon: <ComponentIcon />,
        text: 'Components',
        url: '/docs/components',
        // secondary items will be displayed differently on navbar
        secondary: false,
      },
    ],
  };
}
