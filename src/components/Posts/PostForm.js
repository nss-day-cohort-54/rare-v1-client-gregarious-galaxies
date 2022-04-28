import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { getCategories } from "../Categories/CategoryManager"
import { addPost } from "./PostManager"

export const PostForm = () => {
    const [categories, setCategories] = useState([])
    const history = useHistory()
    const [post, setPost] = useState({
        user_id: 1, // TODO: change to actual user Id
        category_id: 0,
        title: "",
        publication_date: Date.now(),
        image_url: "",
        content:""
    })


    // CREATE TABLE "Posts" (
    //     "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    //     "user_id" INTEGER,
    //     "category_id" INTEGER,
    //     "title" varchar,
    //     "publication_date" date,
    //     "image_url" varchar,
    //     "content" varchar,
    //     "approved" bit
    // get the catagories, and difficulty to store in state variables

    // GET and set radio button options

    useEffect(() => {
        getCategories()
            .then((categoriesFromApi) => {
                setCategories(categoriesFromApi)
            })
    }
        , [])
    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newPost = Object.assign({}, post)
        newPost[event.target.name] = event.target.value
        setPost(newPost)
        // moking a copy
    }

    // creating the obj to send into the API and Post
    const SubmitNewPost = () => {
        const copyPost = { ...post } 
        copyPost.category_id = parseInt(copyPost.category_id)
        copyPost.user_id = parseInt(copyPost.user_id) // TODO:
        if (!copyPost.publication_date) {
            copyPost.publication_date = Date(Date.now()).toLocaleString('en-us').split('GMT')[0]
        }
        addPost(copyPost)
        .then( ()=> history.push("/posts"))
    }

    // define state variable [] (ingredientUpdate)
    // when button is clicked clear boxes

    // when we click the box update the new state variable state and render the new state to the html

    // map the array to html objs that will display a list

    // render check box as ingredients

    return (
        <>
            <form style={{ width: "100%" }}>
                <div className="field">
                    <label htmlFor="categoryId" className="label">Category: </label>
                    <div className="control">
                        <div className="select">
                            <select name="category_id"
                                proptype="int"
                                onChange={handleControlledInputChange}>

                                <option value="0">Select a category</option>
                                {categories.map(c => (
                                    <option key={c.id} value={c.id}>
                                        {c.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <label htmlFor="title" className="label">Title: </label>
                    <div className="control">
                        <input type="text" name="title" required autoFocus className="input"
                            proptype="varchar"
                            onChange={handleControlledInputChange}
                            placeholder="Title"
                        />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="image Link" className="label">Image Link: </label>
                    <div className="control">
                        <input type="text" name="image_url" required autoFocus className="input"
                            proptype="varchar"
                            onChange={handleControlledInputChange}
                            placeholder="Image Link"
                        />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="post-Content" className="label">Content: </label>
                    <div className="control">
                        <input type="text" name="content" required autoFocus className="input"
                            proptype="varchar"
                            onChange={handleControlledInputChange}
                            placeholder="Post Content"
                        />
                    </div>
                </div>
                <div className="field">
                        <div className="control">
                            <button type="submit"
                                onClick={evt => {
                                    evt.preventDefault()
                                    SubmitNewPost()
                                }}
                                className="button is-link">
                                Submit
                            </button>
                        </div>
                    </div>
            </form>
        </>
    )
}