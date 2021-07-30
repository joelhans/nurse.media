import Image from 'next/image'

export const Client = ({ src, name, width, height }) => {
  return <Image src={`/clients/${src}`} width={width} height={height} alt={`Logo for ${name}`} />
}

const Clients = ({ children }) => {
  return (
    <div className="relative !w-full flex items-center flex-wrap justify-around md:justify-between self-center mt-12 mb-24 p-8 -mx-8 bg-white rounded">
      {children}
    </div>
  )
}

export default Clients
