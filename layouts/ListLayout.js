import { useState } from 'react'
import CustomLink from '@components/Link'
import Tag from '@components/Tag'
import siteMetdata from '@data/siteMetadata'
import PageTitle from '@components/PageTitle'

const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export default function ListLayout({ posts, title }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  return (
    <>
      <article id="content-wrapper" className="max-w-screen-lg mx-auto px-6">
        <header className="mt-20">
          <h1 className="text-4xl text-grad font-display font-bold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 pb-2">
            {title}
          </h1>
        </header>
        <div className="max-w-none prose prose-md lg:prose-lg xl:prose-xl dark:prose-dark mt-4 mb-24">
          <p className="block text-xl lg:text-2xl text-gray-500 italic font-semibold mb-8">
            Read the latest news, short essays, or long-form thoughts about my experiences in
            copywriting and technical writing.
          </p>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="mt-16 mb-24">
            {!filteredBlogPosts.length && 'No articles found.'}
            {filteredBlogPosts.map((frontMatter) => {
              const { slug, draft, date, title, summary, tags } = frontMatter
              return (
                <div key={slug}>
                  <CustomLink key={slug} href={`/articles/${slug}`} className="group block mb-16">
                    <h3 className="text-xl lg:text-2xl font-display font-semibold mb-4 group-hover:text-green transition-all">
                      {title}
                    </h3>
                    <p className="prose prose-md lg:prose-lg xl:prose-xl dark:prose-dark text-gray-500 dark:text-gray-400 font-normal !mb-2">
                      {summary}
                    </p>
                    <span className="text-base font-bold group-hover:text-green transition-all">
                      Read more &rarr;
                    </span>
                  </CustomLink>
                </div>
              )
            })}
          </div>
        </div>
      </article>
    </>
  )
}
