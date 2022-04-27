import React from "react"
import { Route } from "react-router-dom"
import { PostForm } from "./Posts/PostForm"

import { PostList } from "./Posts/PostLIst"

export const ApplicationViews = () => {
  return (
    <>
      <h1 >Welcome to Rare Publishing</h1>
      <Route exact path="/posts" >
        <PostList />
      </Route>
      <Route exact path="/posts/:postId(\d+)" >
        <PostList />
      </Route>
      <Route exact path="/new-post" >
        <PostForm />
      </Route>
    </>
  )

}
