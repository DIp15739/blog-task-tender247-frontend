import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, deletePost } from '../../redux/actions/postActions'
import BlogCard from '../../components/BlogCard'
import MainLayout from '../../layouts/MainLayout'
import Modal from '../../components/Modal.JS'
import PostForm from '../../components/PostForm.JS'

const MyBlogPage = () => {
  const dispatch = useDispatch()
  const { posts, loading } = useSelector((state) => state.post)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const handleDelete = (id) => {
    dispatch(deletePost(id))
  }

  return (
    <MainLayout>
      <h1>My Blogs</h1>
      <button onClick={() => setShowModal(true)}>Create New Post</button>
      {loading && <LoadingSpinner />}
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} onDelete={handleDelete} />
      ))}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PostForm onClose={() => setShowModal(false)} />
        </Modal>
      )}
    </MainLayout>
  )
}

export default MyBlogPage
