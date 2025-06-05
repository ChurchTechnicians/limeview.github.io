import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from './AuthProvider'

export default function NavBar() {
  const { t, i18n } = useTranslation()
  const { user, logout } = useAuth()

  const toggleLang = () => {
    const next = i18n.language === 'no' ? 'en' : 'no'
    i18n.changeLanguage(next)
  }

  return (
    <nav className="navbar">
      <div>
        <Link to="/">LimeView</Link>
        <Link to="/browse">{t('browse')}</Link>
        <Link to="/categories">{t('categories')}</Link>
        <Link to="/trending">{t('trending')}</Link>
        {user && <Link to="/watchlist">{t('watchlist')}</Link>}
        {user?.user_metadata?.is_admin && <Link to="/admin">{t('admin')}</Link>}
      </div>
      <div>
        <button onClick={toggleLang}>{i18n.language === 'no' ? 'EN' : 'NO'}</button>
        {user ? (
          <>
            <Link to="/account">{t('account')}</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/account">Login</Link>
        )}
      </div>
    </nav>
  )
}
