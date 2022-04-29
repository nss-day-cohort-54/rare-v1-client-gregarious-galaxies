import React from "react"
import { Route } from "react-router-dom"
import { PostForm } from "./Posts/PostForm"

import { PostDetails } from "./Posts/PostDetails"
import { CategoryList } from "./Categories/CategoryList"
import { PostList } from "./Posts/PostLIst"
import { TagList } from "./Tags/TagList"
import { MyPostList } from "./Posts/MyPosts"
import { UserList } from "./Users/UserList"
import { CommentForm } from "../Comment/CommentForm"

export const ApplicationViews = () => {
  return (
    <>
      <h1 >Welcome to Rare Publishing</h1>
      <Route exact path="/posts" >
        <PostList />
      </Route>
      <Route exact path="/posts/details/:postId(\d+)" >
        <PostDetails />
      </Route>
      <Route exact path="/my-posts" >
        <MyPostList />
      </Route>
      <Route exact path="/tags" >
        <TagList />
      </Route>
      <Route exact path="/categories" >
        <CategoryList />
      </Route>
      <Route exact path="/new-post" >
        <PostForm />
      </Route>
      <Route exact path="/users" >
        <UserList />
      </Route>
      <Route exact path="/posts/details/:postId(\d+)/comment" >
        <CommentForm />
      </Route>
    </>
  )
}
