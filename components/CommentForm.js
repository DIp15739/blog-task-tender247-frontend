import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addComment } from '../redux/actions/commentActions'

const CommentForm = ({ postId }) => {
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addComment(postId, { content }))
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Write a comment..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Comment</button>
    </form>
  )
}

export default CommentForm
