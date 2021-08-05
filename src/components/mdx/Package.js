import Link from '@components/Link'
import { Price } from '@components/mdx/Typography'

export const Body = ({ children }) => {
  return <div className="col-span-4 lg:col-span-2 prose prose-md">{children}</div>
}

export const Get = ({ children, price, query }) => {
  return (
    <div className="col-span-4 lg:col-span-2 prose prose-md p-6 bg-green bg-opacity-5 rounded-sm">
      <Price>{price}</Price>
      {children}
      <Link
        href={`/contact/?type=${query}`}
        className="inline-block text-base !text-white font-bold mt-4 md:mt-0 px-4 py-2 bg-green rounded-sm hover:bg-orange transition-all"
      >
        Start your project
      </Link>
    </div>
  )
}

const Package = ({ children, type }) => {
  return (
    <div className="grid grid-cols-4 gap-8 prose prose-md max-w-none p-8 mb-8 border border-gray-300 rounded-sm shadow-sm">
      <h2 className="col-span-4 !m-0">{type}</h2>
      {children}
    </div>
  )
}

export default Package
