import fs from 'fs'
import { promises as fsp } from 'fs'
import matter from 'gray-matter'
import path from 'path'
import renderToString from 'next-mdx-remote/render-to-string'

import MDXComponents from '@components/MDXComponents'
import imgToJsx from './img-to-jsx'

const root = process.cwd()

export async function getSingleContent(contentPath, slug) {
  const filepath = path.join(root, contentPath, `${slug}.mdx`)
  const source = await fsp.readFile(filepath)
  const stat = fs.statSync(filepath).mtime
  const { content, data } = matter(source)
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [require('remark-slug'), require('remark-autolink-headings'), imgToJsx],
      inlineNotes: true,
      rehypePlugins: [],
    },
  })

  return {
    filepath,
    slug,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      slug: slug || null,
      lastmod: JSON.parse(JSON.stringify(stat)),
      ...data,
    },
    mdxSource,
  }
}
