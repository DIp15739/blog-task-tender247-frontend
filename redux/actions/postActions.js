import { api, endpoints } from '../../utils/api'
import { toast } from 'react-toastify'

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS'
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'

export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await api.get(endpoints.fetchPosts)
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data })
  } catch (error) {
    toast.error('Error fetching posts.')
    throw error
  }
}

export const fetchPost = (id) => async (dispatch) => {
  try {
    const response = await api.get(endpoints.fetchPost(id))
    dispatch({ type: FETCH_POST_SUCCESS, payload: response.data })
  } catch (error) {
    toast.error('Error fetching post.')
    throw error
  }
}

export const createPost = (postData) => async (dispatch) => {
  try {
    const response = await api.post(endpoints.createPost, postData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    dispatch({ type: CREATE_POST_SUCCESS, payload: response.data })
    toast.success('Post created successfully!')
  } catch (error) {
    toast.error('Error creating post.')
    throw error
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.delete(endpoints.deletePost(id), {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    dispatch({ type: DELETE_POST_SUCCESS, payload: id })
    toast.success('Post deleted successfully!')
  } catch (error) {
    toast.error('Error deleting post.')
    throw error
  }
}
