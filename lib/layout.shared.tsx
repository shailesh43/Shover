import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { ShoverBrand } from '@/components/shover-brand';
import { gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      component: <ShoverBrand />,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
