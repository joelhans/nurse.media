import siteMetadata from '@data/siteMetadata'
import headerNavLinks from '@data/headerNavLinks'
import Logo from '@data/netdata.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

import { FaGithub } from 'react-icons/fa'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <header className="sticky top-0 z-40 lg:z-50 max-w-screen-lg xl:max-w-screen-xl mx-auto bg-white border-b border-gray-100 dark:bg-gray-900 dark:border-gray-700">
        <div className="flex items-center justify-center lg:justify-between flex-wrap py-4 lg:px-0 container mx-auto">
          <div className="w-1/4">
            <Link href="/" aria-label="Tailwind CSS Blog">
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo width="auto" height="auto" className="w-36" />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex-grow lg:flex lg:items-center lg:w-auto justify-center">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 text-gray-900 text-base font-medium sm:p-4 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:flex lg:items-center lg:w-1/4 justify-end">
            <ThemeSwitch />
            <div className="hidden sm:block ml-2">
              <Link href="https://github.com/netdata/netdata">
                <FaGithub className="w-6 h-6" />
              </Link>
            </div>
            <MobileNav />
          </div>
        </div>
      </header>
      <main className="mb-auto">{children}</main>
      <Footer />
    </SectionContainer>
  )
}

export default LayoutWrapper
