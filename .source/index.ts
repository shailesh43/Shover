// @ts-nocheck -- skip type checking
import * as docs_1 from "../content/docs/index.mdx?collection=docs"
import * as docs_0 from "../content/docs/how-to-write-markdown.mdx?collection=docs"
import { _runtime } from "fumadocs-mdx/runtime/next"
import * as _source from "../source.config"
export const docs = _runtime.docs<typeof _source.docs>([{ info: {"path":"how-to-write-markdown.mdx","fullPath":"content/docs/how-to-write-markdown.mdx"}, data: docs_0 }, { info: {"path":"index.mdx","fullPath":"content/docs/index.mdx"}, data: docs_1 }], [])