import { Price } from '@components/mdx/Typography'

const Package = ({ children, type, price }) => {
  return (
    <div className="px-8 pb-2 mb-8 border border-gray-300 rounded-sm shadow-sm">
      <h2 className="!mt-8">
        {type} <Price>{price}</Price>
      </h2>
      {children}
    </div>
  )
}

export default Package
