// @ts-nocheck
import * as __fd_glob_4 from "../content/docs/components/macbook-screen.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/components/apple-hello.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/getting-started.mdx?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/components/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"components/meta.json": __fd_glob_0, }, {"getting-started.mdx": __fd_glob_1, "index.mdx": __fd_glob_2, "components/apple-hello.mdx": __fd_glob_3, "components/macbook-screen.mdx": __fd_glob_4, });