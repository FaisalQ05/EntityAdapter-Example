import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { userSelector } from "./usersSlice"
import UserLink from "./UserLink"

const UsersList = () => {
  // const users = useSelector(state => state.users);
  // console.log("users , ", users)

  const userIds = useSelector((state) => userSelector.selectIds(state))
//   console.log(userIds)

  const renderedUsers = userIds.map((userId) => (
    <UserLink key={userId} userId={userId} />
  ))
  return (
    <>
      <section className="usersList">{renderedUsers}</section>
    </>
  )
}

export default UsersList
