import Link from '@components/Link'

const Button = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="inline-block text-lg md:text-xl !text-white font-bold px-4 py-2 md:px-6 md:py-4 bg-green rounded-sm hover:bg-orange transition-all"
    >
      {children}
    </Link>
  )
}

export default Button
