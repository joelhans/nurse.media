import Link from '@components/Link'

const CTA = ({ href, children }) => {
  return (
    <div className="w-screen">
      <Link href={href} className="block w-full mt-24 p-6 bg-gray-100 rounded-sm shadow-md">
        Next Steps Tell me about your project Whether you're bringing a new product to market or
        redesigning enterprise software, we'll make sure it's done right — the first time.
      </Link>
    </div>
  )
}

export default CTA
