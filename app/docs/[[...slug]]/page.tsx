import { source } from '@/lib/source';
import { DocsBody, DocsDescription, DocsPage, DocsTitle, MarkdownCopyButton, ViewOptionsPopover, } from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { github } from '@/lib/github';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  // return (
  //   <DocsPage toc={page.data.toc} full={page.data.full}>
  //     <DocsTitle>{page.data.title}</DocsTitle>
  //     <DocsDescription>{page.data.description}</DocsDescription>
  //     <Button className="mr-auto" variant="outline">
  //       Copy Markdown<span><Copy className="h-6 w-6" /></span>
  //     </Button>
  //     <DocsBody>
  //       <MDX
  //         components={getMDXComponents({
  //           // this allows you to link to other pages with relative file paths
  //           a: createRelativeLink(source, page),
  //         })}
  //       />
  //     </DocsBody>
  //   </DocsPage>
  // );

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <h1 className="text-[1.75em] font-bold tracking-tight">{page.data.title}</h1>
      <p className="text-md text-fd-muted-foreground mb-2">{page.data.description}</p>
      <div className="flex flex-row flex-wrap gap-2 items-center border-b pb-8">
        <MarkdownCopyButton markdownUrl={`${page.url}.mdx`} />
        <ViewOptionsPopover
          markdownUrl={`${page.url}.mdx`}
          githubUrl={`https://github.com/${github.owner}/${github.repoName}/blob/dev/apps/docs/content/docs/${page.path}`}
        />
      </div>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );

}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: PageProps<'/docs/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
