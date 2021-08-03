import hydrate from 'next-mdx-remote/hydrate'
import { getSingleContent } from '@/lib/mdx'
import { BASE_CONTENT_PATH } from '@config/constants'
import MDXComponents from '@components/MDXComponents'
import PageLayout from '@/layouts/PageLayout'
import Quote from '@components/Quote'
import CTA from '@components/CTA'

export async function getStaticProps() {
  const content = await getSingleContent(BASE_CONTENT_PATH, 'services')

  return {
    props: {
      mdxSource: content.mdxSource,
      frontMatter: content.frontMatter,
    },
  }
}

export default function Services({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  })

  return (
    <>
      <PageLayout frontMatter={frontMatter}>
        {content}
        <Quote client="Matt Connor, CEO, Strasmore &amp; SSD Nodes" image="matt-connor.jpg">
          Joel was our first marketing hire and has been a key member of our marketing team since
          2016. Joel is deeply and uniquely talented in voice, branding, and copywriting. I strongly
          recommend taking the opportunity to work with him.
        </Quote>
      </PageLayout>
      <CTA href="/contact/">blah</CTA>
    </>
  )
}
