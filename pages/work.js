import hydrate from 'next-mdx-remote/hydrate'
import { getSingleContent } from '@/lib/mdx'
import { BASE_CONTENT_PATH } from '@config/constants'
import MDXComponents from '@components/MDXComponents'
import PageLayout from '@/layouts/PageLayout'
import CTA from '@components/CTA'

export async function getStaticProps() {
  const content = await getSingleContent(BASE_CONTENT_PATH, 'work')

  return {
    props: {
      mdxSource: content.mdxSource,
      frontMatter: content.frontMatter,
    },
  }
}

export default function Work({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  })

  return (
    <>
      <PageLayout frontMatter={frontMatter}>{content}</PageLayout>
      <CTA />
    </>
  )
}
