import { api, endpoints } from '../../utils/api'
import { toast } from 'react-toastify'

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await api.post(endpoints.register, userData)
    dispatch({ type: REGISTER_SUCCESS })
    toast.success(response.data.message)
  } catch (error) {
    toast.error(error.response.data.message)
    throw error
  }
}

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await api.post(endpoints.login, userData)
    localStorage.setItem('token', response.data.token)
    dispatch({ type: LOGIN_SUCCESS })
    toast.success('Login successful!')
  } catch (error) {
    toast.error(error.response.data.message)
    throw error
  }
}

export const logoutUser = () => {
  localStorage.removeItem('token')
  return { type: LOGOUT }
}
