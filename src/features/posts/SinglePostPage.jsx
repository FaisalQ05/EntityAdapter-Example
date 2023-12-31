import React from "react"
import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import PostBody from "./PostBody"
import { postsSelector } from "./postsSlice"

const SinglePostPage = () => {
  const { postId } = useParams()
  console.log(postId)
  const PostById = useSelector((state) =>
    postsSelector.selectById(state, postId)
  )
  if (!PostById) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }
  // console.log(PostById)
  return (
    <section className="postSection">
      <article className="postBody">
        <h2 className="postTitle">{PostById.title}</h2>
        <p className="postContent">{PostById.body}</p>
        <Link className="postLink" to={`/post/edit/${PostById.id}`}>
          Edit Post
        </Link>
        <PostAuthor userId={PostById.userId} />
        <TimeAgo timeStamp={PostById.date} />
      </article>
    </section>
  )
}

export default SinglePostPage
