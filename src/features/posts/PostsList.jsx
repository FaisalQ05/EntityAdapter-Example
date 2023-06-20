import React from "react"
import { useSelector } from "react-redux"
import PostBody from "./PostBody"
import { postsSelector } from "./postsSlice"

const PostsList = () => {
  const postsStatus = useSelector((state) => state.posts.status)
  const error = useSelector((state) => state.posts.error)
  const posts = useSelector((state) => state.posts)
  // console.log("status : ", postsStatus)
  // console.log("error : ", error)
  console.log("posts list view Posts : ", posts)

  const orderedPostIds = useSelector((state) => postsSelector.selectIds(state))
  const selectTotal = useSelector((state) => postsSelector.selectTotal(state))
  const selectEntities = useSelector((state) =>
    postsSelector.selectEntities(state)
  )
  console.log(orderedPostIds)
  console.log("selectTotal :  ", selectTotal)

  let content
  if (postsStatus === "loading") {
    content = <p>Loading....</p>
  } else if (postsStatus === "succeeded") {
    content = orderedPostIds.map((postId) => (
      <PostBody key={postId} postId={postId} />
    ))
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>
  }

  return <section className="postSection">{content}</section>
}

export default PostsList
