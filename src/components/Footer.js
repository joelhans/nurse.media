import Link from './Link'
import Cactus from '/public/cactus.svg'

export default function Footer() {
  return (
    <footer className="font-sans bg-purple px-6 py-16">
      <div className="flex flex-wrap flex-row max-w-screen-lg mx-auto px-6 pl-0">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-6 px-6">
          <h3 className="text-lg text-white font-bold mb-2">Nurse Media</h3>
          <p className="text-white">
            Nurtured copywriting and content for SaaS &amp; tech. Based in Tucson, Arizona.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-6 px-6">
          <h3 className="text-lg text-white font-bold mb-2">Go</h3>
          <Link className="block text-orange mb-1 hover:text-green" href="/work/">
            Work
          </Link>
          <Link className="block text-orange mb-1 hover:text-green" href="/services/">
            Services
          </Link>
          <Link className="block text-orange mb-1 hover:text-green" href="/about/">
            About
          </Link>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0 px-6">
          <h3 className="text-lg text-white font-bold mb-2">Contact</h3>
          <Link className="block text-orange mb-1 hover:text-green" href="/contact/">
            Start your project
          </Link>
          <Link className="block text-orange mb-1 hover:text-green" href="mailto:joel@nurse.media">
            joel@nurse.media
          </Link>
          <Link className="block text-orange mb-1 hover:text-green" href="tel:6084438082">
            608-443-8082
          </Link>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 text-white px-6">
          <p className="mb-2">
            <span className="font-semibold">
              {`© 2016 - ${new Date().getFullYear()}`} Nurse Media.
            </span>{' '}
            All rights reserved. Website by Joel Hans.
          </p>
          <Cactus className="w-12" />
        </div>
      </div>
    </footer>
  )
}
