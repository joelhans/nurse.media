import { useRouter } from 'next/router'
import hydrate from 'next-mdx-remote/hydrate'
import { getSingleContent } from '@/lib/mdx'
import { BASE_CONTENT_PATH } from '@config/constants'
import MDXComponents from '@components/MDXComponents'
import PageLayout from '@/layouts/PageLayout'
import ContactForm from '@components/Contact/ContactForm'

export async function getStaticProps() {
  const content = await getSingleContent(BASE_CONTENT_PATH, 'contact')

  return {
    props: {
      mdxSource: content.mdxSource,
      frontMatter: content.frontMatter,
    },
  }
}

export default function Contact({ mdxSource, frontMatter }) {
  const router = useRouter()

  const content = hydrate(mdxSource, {
    components: MDXComponents,
  })

  return (
    <>
      <PageLayout frontMatter={frontMatter}>
        {content}
        <ContactForm router={router} />
      </PageLayout>
    </>
  )
}
