export const Subhead = ({ children }) => {
  return (
    <span className="block text-xl lg:text-2xl text-gray-500 italic font-semibold !-mt-4 mb-12">
      {children}
    </span>
  )
}

export const Tags = ({ children }) => {
  return <div className="flex">{children}</div>
}

export const Tag = ({ children }) => {
  return (
    <span className="Tag block text-xl lg:text-2xl text-gray-500 italic font-semibold mr-4">
      {children}
    </span>
  )
}
