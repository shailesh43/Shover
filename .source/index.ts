// @ts-nocheck -- skip type checking
import * as docs_3 from "../content/docs/dir/index.mdx?collection=docs"
import * as docs_2 from "../content/docs/(introduction)/page.mdx?collection=docs"
import * as docs_1 from "../content/docs/index.mdx?collection=docs"
import * as docs_0 from "../content/docs/how-to-write-markdown.mdx?collection=docs"
import { _runtime } from "fumadocs-mdx/runtime/next"
import * as _source from "../source.config"
export const docs = _runtime.docs<typeof _source.docs>([{ info: {"path":"how-to-write-markdown.mdx","fullPath":"content/docs/how-to-write-markdown.mdx"}, data: docs_0 }, { info: {"path":"index.mdx","fullPath":"content/docs/index.mdx"}, data: docs_1 }, { info: {"path":"(introduction)/page.mdx","fullPath":"content/docs/(introduction)/page.mdx"}, data: docs_2 }, { info: {"path":"dir/index.mdx","fullPath":"content/docs/dir/index.mdx"}, data: docs_3 }], [{"info":{"path":"(introduction)/meta.json","fullPath":"content/docs/(introduction)/meta.json"},"data":{"title":"Display Name","pages":["index","getting-started"],"root":true,"icon":"MyIcon"}}, {"info":{"path":"dir/meta.json","fullPath":"content/docs/dir/meta.json"},"data":{"title":"Display Name","pages":["index","getting-started"],"defaultOpen":true,"icon":"MyIcon"}}])