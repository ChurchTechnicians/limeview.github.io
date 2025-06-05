import { useState } from 'react'
import { useAuth } from '../components/AuthProvider'

export default function Account() {
  const { user, login, register, logout } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [registering, setRegistering] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (registering) {
      register(email, password)
    } else {
      login(email, password)
    }
  }

  if (user) {
    return (
      <div className="page">
        <h1>Account</h1>
        <p>{user.email}</p>
        <button onClick={logout}>Logout</button>
      </div>
    )
  }

  return (
    <div className="page">
      <h1>{registering ? 'Register' : 'Login'}</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => setRegistering(!registering)}>
        {registering ? 'Have an account?' : 'Create account'}
      </button>
    </div>
  )
}
