import Header from './molecules/Header'

function Main({
  children,
  title
}) {
  return (
    <main className="mw-grid">
      <Header title={title} />
      {children}
    </main>
  )
}

export default Main
