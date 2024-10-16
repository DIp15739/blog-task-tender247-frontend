import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT } from '../actions/authActions'

const initialState = {
  isAuthenticated:
    typeof window !== 'undefined' && !!localStorage.getItem('token'),
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true }
    case LOGOUT:
      return { ...state, isAuthenticated: false }
    default:
      return state
  }
}

export default authReducer
