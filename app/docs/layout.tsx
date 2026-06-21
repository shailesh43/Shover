import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { ShoverBrand } from '@/components/shover-brand';
import { github } from '@/lib/github';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.getPageTree()} nav={{
        title: <ShoverBrand />,
      }}>
      {children}
    </DocsLayout>
  );
}
