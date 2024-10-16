import {
  FETCH_POSTS_SUCCESS,
  FETCH_POST_SUCCESS,
  CREATE_POST_SUCCESS,
  DELETE_POST_SUCCESS,
} from '../actions/postActions'

const initialState = {
  posts: [],
  loading: false,
  post: null,
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload, loading: false }
    case FETCH_POST_SUCCESS:
      return { ...state, post: action.payload }
    case CREATE_POST_SUCCESS:
      return { ...state, posts: [...state.posts, action.payload] }
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      }
    default:
      return state
  }
}

export default postReducer
