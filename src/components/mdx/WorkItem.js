import Image from 'next/image'
import { Subhead, Tags, Tag } from '@components/mdx/Typography'

const Client = ({ client, image, imageWidth, imageHeight, imageAlt, children }) => {
  return (
    <div className="relative !w-full flex items-center flex-wrap justify-around md:justify-between self-center">
      <h2>{client}</h2>

      {/* <div className="w-full h-full border border-orange rounded-sm">
        <Image
          src={image}
          width={imageWidth}
          height={imageHeight}
          alt={imageAlt}
        />
      </div> */}
      <div className="prose prose-md lg:prose-lg xl:prose-xl mt-4 md:mt-8">{children}</div>
    </div>
  )
}

export default Client
