import { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { registerUser, loginUser } from '../redux/actions/authActions'
import Notification from './Notification'

const AuthForm = ({ mode }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (mode === 'register') {
        await dispatch(registerUser({ username, password }))
        router.push('/auth/login')
      } else {
        await dispatch(loginUser({ username, password }))
        router.push('/')
      }
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div>
      {error && <Notification message={error} type="error" />}
      <form onSubmit={handleSubmit}>
        <h2>{mode === 'register' ? 'Register' : 'Login'}</h2>
        {mode === 'register' && (
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        )}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">
          {mode === 'register' ? 'Register' : 'Login'}
        </button>
      </form>
    </div>
  )
}

export default AuthForm
