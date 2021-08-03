import Image from 'next/image'

export const Client = ({ src, name, width, height }) => {
  return (
    <div className="flex items-center justify-center text-center p-6 border border-gray-300 rounded-sm shadow-sm">
      <Image src={`/clients/${src}`} width={width} height={height} alt={`Logo for ${name}`} />
    </div>
  )
}

const Clients = ({ children }) => {
  return (
    <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20 mb-12 lg:mb-16">
      {children}
    </div>
  )
}

export default Clients
