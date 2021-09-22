import siteMetadata from '@data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSeo } from '@components/SEO'
import { getFrontMatter } from '@/lib/mdx'
import { ARTICLES_CONTENT_PATH } from '@config/constants'

export async function getStaticProps() {
  const posts = await getFrontMatter(ARTICLES_CONTENT_PATH, true)
  return { props: { posts } }
}

export default function Posts({ posts }) {
  return (
    <>
      <PageSeo
        title={`Updates & articles`}
        description={`Read my latest news, short essays, or long-form thoughts about my experiences in copywriting and technical writing.`}
        url={`${siteMetadata.siteUrl}/articles`}
      />
      <ListLayout posts={posts} title="Articles" />
    </>
  )
}
