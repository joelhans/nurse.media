import { useRouter } from 'next/router'
import { getSingleContent } from '@/lib/mdx'
import { PageSeo } from '@components/SEO'
import { BASE_CONTENT_PATH } from '@config/constants'
import siteMetadata from '@data/siteMetadata'
import { MDXLayoutRenderer } from '@components/MDXComponents'

import ContactForm from '@components/Contact/ContactForm'

export async function getStaticProps() {
  const content = await getSingleContent(BASE_CONTENT_PATH, 'contact')
  return { props: { content } }
}

export default function Contact({ content }) {
  const router = useRouter()
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
          <ContactForm router={router} />
        </div>
      </article>
    </>
  )
}


// import { useRouter } from 'next/router'
// import hydrate from 'next-mdx-remote/hydrate'
// import { getSingleContent } from '@/lib/mdx'
// import { BASE_CONTENT_PATH } from '@config/constants'
// import MDXComponents from '@components/MDXComponents'
// import PageLayout from '@/layouts/PageLayout'
// import ContactForm from '@components/Contact/ContactForm'

// export async function getStaticProps() {
//   const content = await getSingleContent(BASE_CONTENT_PATH, 'contact')

//   return {
//     props: {
//       mdxSource: content.mdxSource,
//       frontMatter: content.frontMatter,
//     },
//   }
// }

// export default function Contact({ mdxSource, frontMatter }) {
//   const router = useRouter()

//   const content = hydrate(mdxSource, {
//     components: MDXComponents,
//   })

//   return (
//     <>
//       <PageLayout frontMatter={frontMatter}>
//         {content}
//         <ContactForm router={router} />
//       </PageLayout>
//     </>
//   )
// }
