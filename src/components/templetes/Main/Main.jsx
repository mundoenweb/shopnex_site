import Header from './molecules/Header'

function Main({
  children,
  title
}) {
  return (
    <main className="mw-grid">
      <Header title={title} />
      <section className='section_main'>
        {children}
      </section>
    </main>
  )
}

export default Main
