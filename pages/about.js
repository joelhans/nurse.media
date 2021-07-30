import hydrate from 'next-mdx-remote/hydrate'
import { getSingleContent } from '@/lib/mdx'
import { BASE_CONTENT_PATH } from '@config/constants'
import MDXComponents from '@components/MDXComponents'
import PageLayout from '@/layouts/PageLayout'

export async function getStaticProps() {
  const content = await getSingleContent(BASE_CONTENT_PATH, 'about')

  return {
    props: {
      mdxSource: content.mdxSource,
      frontMatter: content.frontMatter,
    },
  }
}

export default function Fiction({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  })

  return (
    <>
      <PageLayout frontMatter={frontMatter}>{content}</PageLayout>
    </>
  )
}
