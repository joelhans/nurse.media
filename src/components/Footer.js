import Link from './Link'
import siteMetadata from '@data/siteMetadata'
import SocialIcon from '@components/social-icons'

export default function Footer() {
  return (
    <footer className="font-sans bg-orange bg-opacity-10 px-6 py-16">
      <div className="flex flex-row max-w-screen-lg mx-auto px-6">
        <div className="w-1/4">
          <div className="block text-2xl font-display text-sea font-bold mb-2">Nurse Media</div>
        </div>
        <div className="w-1/4 mb-8 text-purple">
          <h3 className="font-bold mb-2">Go</h3>
          <Link className="block mb-1 hover:text-orange" href="/work/">
            Work
          </Link>
          <Link className="block mb-1 hover:text-orange" href="/services/">
            Services
          </Link>
          <Link className="block mb-1 hover:text-orange" href="/about/">
            About
          </Link>
        </div>
        <div className="w-1/4">
          <h3 className="font-bold mb-2">Contact</h3>
          <p className="block font-medium mb-1">Based in Tucson, Arizona</p>
        </div>
        <div className="w-1/4">
          <p className="font-semibold mb-2">{`© 2016 - ${new Date().getFullYear()}`} Nurse Media</p>
          <p>Storytelling-driven copywriting and content for SaaS &amp; tech</p>
        </div>
      </div>
    </footer>
  )
}
