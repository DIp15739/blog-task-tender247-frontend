import { ADD_COMMENT_SUCCESS } from '../actions/commentAction'

const initialState = {
  comments: [],
}

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT_SUCCESS:
      return { ...state, comments: [...state.comments, action.payload] }
    default:
      return state
  }
}

export default commentReducer
