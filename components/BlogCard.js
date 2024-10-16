const BlogCard = ({ post, onDelete }) => {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>By: {post.author.username}</p>
      <button onClick={() => onDelete(post.id)}>Delete</button>
    </div>
  )
}

export default BlogCard
