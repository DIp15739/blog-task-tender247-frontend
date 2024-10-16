import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

const endpoints = {
  register: '/auth/register',
  login: '/auth/login',
  fetchPosts: '/post',
  fetchPost: (id) => `/post/${id}`,
  createPost: '/post',
  deletePost: (id) => `/post/${id}`,
  addComment: (postId) => `/post/${postId}/comments`,
}

export { api, endpoints }
