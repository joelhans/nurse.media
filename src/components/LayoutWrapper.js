import { useTheme } from 'next-themes'
import headerNavLinks from '@data/headerNavLinks'
import Link from './Link'
import Footer from './Footer'
import MobileNav from './MobileNav'

import Cactus from '/public/cactus.svg'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex-1 w-full">
          <header className="max-w-screen-lg mx-auto px-6">
            <div className="flex items-center justify-center lg:justify-between flex-wrap py-8 mx-auto">
              <div className="">
                <Link href="/" aria-label="Nurse Media">
                  <div className="flex items-center justify-between">
                    <Cactus className="w-12" />
                    <span className="text-2xl text-grad font-display font-bold ml-2">Nurse</span>
                  </div>
                </Link>
              </div>
              <div className="flex-grow lg:flex lg:items-center lg:w-auto ml-4 md:ml-12">
                <div className="hidden sm:block">
                  {headerNavLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="px-1 text-orange text-xl font-bold sm:p-4 hover:text-purple transition-all"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center w-auto lg:w-1/4 justify-end">
                <Link
                  href="/contact"
                  className="hidden sm:block text-lg md:text-xl text-white font-bold px-4 py-2 md:px-6 md:py-4 bg-green rounded-sm hover:bg-orange transition-all"
                >
                  Start your project
                </Link>
                <MobileNav />
              </div>
            </div>
          </header>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default LayoutWrapper
