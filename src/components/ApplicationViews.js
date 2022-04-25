import React from "react"
import { Route } from "react-router-dom"

import { PostList } from "./Posts/PostLIst"

export const ApplicationViews = () => {
  return (
    <>
      <h1 >Welcome to Rare Publishing</h1>
      <Route path="/posts" exact>
        <PostList />
      </Route>
    </>
  )

}
