import { Navigate } from 'react-router-dom'
import { useAuth } from './AuthProvider'

export default function AdminRoute({ children }) {
  const { user } = useAuth()
  const isAdmin = user?.user_metadata?.is_admin
  if (!isAdmin) return <Navigate to="/" replace />
  return children
}
