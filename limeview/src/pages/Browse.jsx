export default function Browse() {
  const items = ['The Lorax', 'Doctor Who', 'Placeholder Movie', 'Another Film']
  return (
    <div className="page">
      <h1>Browse</h1>
      <div className="content-grid">
        {items.map((item) => (
          <div key={item} className="card">{item}</div>
        ))}
      </div>
    </div>
  )
}
