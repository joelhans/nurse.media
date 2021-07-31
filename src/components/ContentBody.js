import { Subhead } from '@components/mdx/Typography'

export default function ContentBody({ children, summary }) {
  return (
    <div className="prose prose-md lg:prose-lg xl:prose-xl dark:prose-dark mt-4 md:mt-8 mb-24">
      <Subhead>{summary}</Subhead>
      {children}
    </div>
  )
}
