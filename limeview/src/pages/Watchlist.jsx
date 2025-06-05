export default function Watchlist() {
  const list = ['The Lorax', 'Doctor Who']
  return (
    <div className="page">
      <h1>Watchlist</h1>
      <ul>
        {list.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  )
}
