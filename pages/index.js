import { PageSeo } from '@components/SEO'
import CustomLink from '@components/Link'
import siteMetadata from '@data/siteMetadata'
import { getFrontMatter } from '@/lib/mdx'
import { ARTICLES_CONTENT_PATH } from '@config/constants'

export async function getStaticProps() {
  const posts = await getFrontMatter(ARTICLES_CONTENT_PATH)
  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className="bg-green-100 w-full"></div>

      <div id="hero" className="py-16">
        <div className="prose prose-md lg:prose-lg xl:prose-xl dark:prose-dark">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-steel">
            I write nurtured copy that makes businesses grow.
          </h1>
          <p>Storytelling-driven copywriting and content for SaaS &amp; tech</p>
        </div>
      </div>
    </>
  )
}
