import Link from '@components/Link'
import SectionContainer from '@components/SectionContainer'
import Button from '@components/mdx/Button'

const CTA = () => {
  return (
    <div className="w-screen bg-green bg-opacity-5 mt-24 py-16">
      <SectionContainer>
        <div className="w-full lg:w-3/4 text-center mx-auto px-6">
          <h3 className="text-2xl lg:text-4xl font-bold mb-6">Next steps</h3>
          <p className="text-lg md:text-xl mb-6">
            Whether you need a refresh of your existing brand, new copy for a product launch, or a
            comprehensive content strategy, I'll make sure it's nurtured and impactful.
          </p>
          <Button href="/contact/">Start your project</Button>
        </div>
      </SectionContainer>
    </div>
  )
}

export default CTA
