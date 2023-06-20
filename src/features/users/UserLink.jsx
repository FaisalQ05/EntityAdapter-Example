import React from "react"
import { useSelector } from "react-redux"
import { userSelector } from "./usersSlice"
import { Link } from "react-router-dom"

const UserLink = ({ userId }) => {
  const user = useSelector((state) => userSelector.selectById(state, userId))

  return (
    <li>
      <Link to={`/user/${userId}`}>{user.name}</Link>
    </li>
  )
}

export default UserLink
