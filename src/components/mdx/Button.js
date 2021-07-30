import Link from '@components/Link'

const Button = ({ children }) => {
  return (
    <Link
      href="/contact"
      className="text-xl text-white font-bold px-6 py-4 bg-green rounded-sm hover:bg-orange transition-all"
    >
      Get in touch
    </Link>
  )
}

export default Button
