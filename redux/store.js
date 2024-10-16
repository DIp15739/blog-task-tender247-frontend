import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './reducers/authReducer'
import postReducer from './reducers/postReducer'
import commentReducer from './reducers/commentReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  comment: commentReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
