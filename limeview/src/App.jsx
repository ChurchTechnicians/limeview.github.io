import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Browse from './pages/Browse'
import Categories from './pages/Categories'
import Watch from './pages/Watch'
import Account from './pages/Account'
import Contact from './pages/Contact'
import Settings from './pages/Settings'
import AdminDashboard from './pages/AdminDashboard'
import Watchlist from './pages/Watchlist'
import Trending from './pages/Trending'
import Help from './pages/Help'
import PrivateRoute from './components/PrivateRoute'
import AdminRoute from './components/AdminRoute'

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
        <Route path="/watchlist" element={<PrivateRoute><Watchlist /></PrivateRoute>} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/help" element={<Help />} />
        <Route path="/account" element={<Account />} />
        <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
      </Routes>
    </>
  )
}
