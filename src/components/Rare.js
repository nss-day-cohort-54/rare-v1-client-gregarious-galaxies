import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { getPostById, getPosts } from "./Posts/PostManager"
import { getCategories } from "./Categories/CategoryManager"
import { useEffect } from "react/cjs/react.production.min"
import { PostList } from "./Posts/PostLIst"

export const Rare = () => {
  const [token, setTokenState] = useState(localStorage.getItem('token'))



  const [post, setPost] = useState({})

  const [categories, setCategories] = useState([])


  // useEffect(() => {
  //   getAllPosts()
  //   getAllCategories()
  // },
  //   []
  //   //only runs on initial load
  // )

  const setToken = (newToken) => {
    localStorage.setItem('token', newToken)
    setTokenState(newToken)
  }


  // const getAllPosts = () => {
  //   getPosts().then(postData => setPosts(postData))
  // }




  // const getAllCategories = () => {
  //   getCategories().then(categoryData => setCategories(categoryData))
  // }

  return <>
    {
      token
        ?
        <Route>
          <NavBar token={token} setToken={setToken} />
          <ApplicationViews />
        </Route>
        :
        <Redirect to="/login" />
    }

    <Route exact path="/login" >
      <NavBar token={token} setToken={setToken} />
      <Login token={token} setToken={setToken} />
    </Route>

    <Route path="/register" exact>
      <NavBar token={token} setToken={setToken} />
      <Register token={token} setToken={setToken} />
    </Route>




  </>
}
