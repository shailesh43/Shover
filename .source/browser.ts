// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"getting-started.mdx": () => import("../content/docs/getting-started.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "components/apple-hello.mdx": () => import("../content/docs/components/apple-hello.mdx?collection=docs"), "components/index.mdx": () => import("../content/docs/components/index.mdx?collection=docs"), "components/macbook-screen.mdx": () => import("../content/docs/components/macbook-screen.mdx?collection=docs"), "layouts/call-to-action.mdx": () => import("../content/docs/layouts/call-to-action.mdx?collection=docs"), "layouts/hero-section.mdx": () => import("../content/docs/layouts/hero-section.mdx?collection=docs"), "layouts/index.mdx": () => import("../content/docs/layouts/index.mdx?collection=docs"), }),
};
export default browserCollections;