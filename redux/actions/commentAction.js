import { api, endpoints } from '../../utils/api'
import { toast } from 'react-toastify'

export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS'

export const addComment = (postId, commentData) => async (dispatch) => {
  try {
    const response = await api.post(endpoints.addComment(postId), commentData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    dispatch({ type: ADD_COMMENT_SUCCESS, payload: response.data })
    toast.success('Comment added successfully!')
  } catch (error) {
    toast.error(error.response.data.message)
    throw error
  }
}
