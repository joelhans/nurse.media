export const Callout = ({ children, color = 'green' }) => {
  return <p className={`text-2xl text-${color} font-bold`}>{children}</p>
}

export const Subhead = ({ children }) => {
  return (
    <span className="block text-xl lg:text-2xl text-gray-500 italic font-semibold !-mt-4 mb-8">
      {children}
    </span>
  )
}

export const Tags = ({ children }) => {
  return <div className="flex flex-wrap -!mt-8">{children}</div>
}

export const Tag = ({ children }) => {
  return (
    <span className="Tag block text-xl lg:text-2xl text-gray-500 italic font-semibold mr-4">
      {children}
    </span>
  )
}

export const Price = ({ children }) => {
  return (
    <span className="relative -top-2 inline-block text-base text-green font-semibold bg-gray-100 ml-4 px-4 py-2 border border-gray-300 rounded-sm shadow-sm">
      {children}
    </span>
  )
}
