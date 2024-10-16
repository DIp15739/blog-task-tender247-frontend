import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../redux/actions/authActions'

const Header = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/blog/myblog">My Blogs</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  )
}

export default Header
