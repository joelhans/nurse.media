import { getSingleContent } from '@/lib/mdx'
import { PageSeo } from '@components/SEO'
import { BASE_CONTENT_PATH } from '@config/constants'
import siteMetadata from '@data/siteMetadata'
import { MDXLayoutRenderer } from '@components/MDXComponents'
import SectionContainer from '@components/SectionContainer'
import Quote from '@components/Quote'
import CTA from '@components/CTA'

export async function getStaticProps() {
  const content = await getSingleContent(BASE_CONTENT_PATH, 'services')
  return { props: { content } }
}

export default function Services({ content }) {
  const { mdxSource, frontMatter } = content

  return (
    <>
      <PageSeo
        title={frontMatter.title}
        description={frontMatter.summary}
        url={`${siteMetadata.siteUrl}/${frontMatter.slug}`}
      />
      <article id="content-wrapper" className="max-w-screen-lg mx-auto px-6">
        <header className="mt-20">
          <h1 className="text-4xl text-grad font-display font-bold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 pb-2">
            {frontMatter.title}
          </h1>
        </header>
        <div className="max-w-none prose prose-md lg:prose-lg xl:prose-xl dark:prose-dark mt-4 mb-24">
          <p className="block text-xl lg:text-2xl text-gray-500 italic font-semibold mb-8">
            {frontMatter.summary} {frontMatter.summary_cont}
          </p>
          <MDXLayoutRenderer mdxSource={mdxSource} frontMatter={frontMatter} />
        </div>
      </article>
      <SectionContainer>
        <Quote client="Matt Connor, CEO, Strasmore &amp; SSD Nodes" image="matt-connor.jpg">
          Joel was our first marketing hire and has been a key member of our marketing team since
          2016. Joel is deeply and uniquely talented in voice, branding, and copywriting. I strongly
          recommend taking the opportunity to work with him.
        </Quote>
      </SectionContainer>
      <CTA />
    </>
  )
}