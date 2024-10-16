import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../../redux/actions/postActions'
import CommentForm from '../../components/CommentForm'
import MainLayout from '../../layouts/MainLayout'

const PostDetailPage = () => {
  const router = useRouter()
  const { id } = router.query
  const dispatch = useDispatch()
  const { post } = useSelector((state) => state.post)

  useEffect(() => {
    if (id) {
      dispatch(fetchPost(id))
    }
  }, [id, dispatch])

  return (
    <MainLayout>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <CommentForm postId={post.id} />
          <h2>Comments</h2>
          {post.comments.map((comment) => (
            <p key={comment.id}>{comment.content}</p>
          ))}
        </>
      )}
    </MainLayout>
  )
}

export default PostDetailPage
