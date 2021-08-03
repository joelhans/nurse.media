export default function ContentWrap({ children }) {
  return (
    <article id="content-wrapper" className="max-w-screen-lg mx-auto px-6">
      {children}
    </article>
  )
}
