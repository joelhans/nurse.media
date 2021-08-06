import Image from 'next/image'

const Quote = ({ children, client, image }) => {
  return (
    <div className="w-full flex flex-col md:flex-row flex-wrap items-center m-0 mt-24 p-6 md:p-12 border-4 border-purple rounded-sm shadow-md">
      <blockquote className="md:flex-1 text-xl md:text-2xl leading-relaxed font-semibold not-italic !m-0 !pl-0 md:pr-6 !border-0">
        {children}
        <cite className="block text-xl font-bold mt-4">{client}</cite>
      </blockquote>
      <div className="mt-6 md:mt-0">
        <Image
          className="rounded-sm"
          src={`/clients/${image}`}
          width={196}
          height={196}
          alt={`Image of ${client}`}
        />
      </div>
    </div>
  )
}

export default Quote
