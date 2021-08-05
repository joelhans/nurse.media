import Button from '@components/mdx/Button'
import { Price } from '@components/mdx/Typography'

export const Body = ({ children }) => {
  return <div className="col-span-2 prose prose-md">{children}</div>
}

export const Get = ({ children, price, query }) => {
  return (
    <div className="col-span-2 prose prose-md">
      {children}
      <Price>{price}</Price>
      <Button href={`/contact/?query=${query}`}>Start your project</Button>
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
