export default function Categories() {
  const categories = ['Sci-Fi', 'Comedy', 'Drama', 'Documentary']
  return (
    <div className="page">
      <h1>Categories</h1>
      <div className="content-grid">
        {categories.map((c) => (
          <div key={c} className="card">{c}</div>
        ))}
      </div>
    </div>
  )
}
