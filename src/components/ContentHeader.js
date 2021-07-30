export default function ContentHeader({ children }) {
  return (
    <header className="w-full mt-16">
      <h1 className="text-4xl text-grad font-display font-bold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 pb-2">
        {children}
      </h1>
    </header>
  )
}
