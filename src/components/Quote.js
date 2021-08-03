import Image from 'next/image'

const Quote = ({ children, client, image }) => {
  return (
    <div className="w-full flex items-center m-0 mt-24 p-12 border-4 border-purple rounded-sm shadow-md">
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

export default Quote
