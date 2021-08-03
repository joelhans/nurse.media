import Link from '@components/Link'

const Button = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="inline-block text-xl !text-white font-bold px-6 py-4 bg-green rounded-sm hover:bg-orange transition-all"
    >
      {children}
    </Link>
  )
}

export default Button
