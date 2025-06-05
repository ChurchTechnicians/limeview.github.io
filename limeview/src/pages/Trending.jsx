export default function Trending() {
  const trends = ['The Lorax', 'Doctor Who']
  return (
    <div className="page">
      <h1>Trending</h1>
      <div className="content-grid">
        {trends.map((t) => (
          <div key={t} className="card">{t}</div>
        ))}
      </div>
    </div>
  )
}
