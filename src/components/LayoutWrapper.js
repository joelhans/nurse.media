import headerNavLinks from '@data/headerNavLinks'
import Link from './Link'
import Footer from './Footer'
import MobileNav from './MobileNav'

import Cactus from './cactus.svg'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex-1 w-full mx-auto">
          <header className="z-40 lg:z-50 px-6 lg:mx-auto">
            <div className="max-w-screen-lg flex items-center align-center justify-between py-6 mx-auto">
              <div className="">
                <Link href="/" aria-label="Nurse Media">
                  <div className="flex items-center justify-between">
                    <Cactus className="w-12" />
                    <span className="hidden md:block text-2xl text-grad font-display font-bold ml-2">Nurse</span>
                  </div>
                </Link>
              </div>
              <div className="flex-grow lg:flex lg:items-center lg:w-auto ml-4 md:ml-8 lg:ml-12">
                <div className="hidden sm:block">
                  {headerNavLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="text-orange text-xl font-bold px-2 lg:px-4 hover:text-purple transition-all"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center w-auto lg:w-1/4 justify-end">
                {/* <ThemeSwitch /> */}
                {/* <RSS /> */}
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
          <main className="mx-auto mb-auto">{children}</main>
        </div>
        {/* <CTA /> */}
        <Footer />
      </div>
    </>
  )
}

export default LayoutWrapper
