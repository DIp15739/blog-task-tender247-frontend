import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/actions/postActions'
import BlogCard from '../components/BlogCard'
import LoadingSpinner from '../components/LoadingSpinner'
import MainLayout from '../layouts/MainLayout'

const HomePage = () => {
  const dispatch = useDispatch()
  const { posts, loading } = useSelector((state) => state.post)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <MainLayout>
      <h1>Blog Posts</h1>
      {loading && <LoadingSpinner />}
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </MainLayout>
  )
}

export default HomePage
