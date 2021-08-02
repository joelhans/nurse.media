import Image from 'next/image'

export const Callout = ({ children, color }) => {
  return <p className={`text-2xl text-${color} font-bold`}>{children}</p>
}

export const Subhead = ({ children }) => {
  return (
    <span className="block text-xl lg:text-2xl text-gray-500 italic font-semibold !-mt-4 mb-12">
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

export const Quote = ({ children, client, image }) => {
  return (
    <div className="w-full flex items-center m-0 p-12 border-4 border-purple rounded-sm shadow-md">
      <blockquote className="flex-1 text-2xl leading-relaxed font-semibold not-italic !m-0 !pl-0 pr-6 !border-0">
        {children}
        <cite className="block text-xl font-bold mt-4">{client}</cite>
      </blockquote>
      <Image
        className="flex-0 rounded-sm"
        src={`/clients/${image}`}
        width={196}
        height={196}
        alt={`Image of ${client}`}
      />
    </div>
  )
}
