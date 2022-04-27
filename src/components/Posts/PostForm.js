import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"

export const PostForm = () => {
    const [categories, setCategories] = useState([])
    const [post, setPost] = useState([])
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [content, setContent] = useState("")
    

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

    // useEffect(() => {
    //     getAllTags()
    //         .then((tagsFromApi) => {
    //             setTags(tagsFromApi)
    //         })
    // }
    //     , [])

    // creating the obj to send into the API and Post
    // const constructNewEntry = () => {
    //     const copyEntry = { ...updatedEntry }
    //     copyEntry.moodId = parseInt(copyEntry.moodId)
    //     if (!copyEntry.date) {
    //         copyEntry.date = Date(Date.now()).toLocaleString('en-us').split('GMT')[0]
    //     }
    //     copyEntry.tags = tagIds
    //     onFormSubmit(copyEntry)
    // }

    // define state variable [] (ingredientUpdate)
    // when button is clicked clear boxes

    // when we click the box update the new state variable state and render the new state to the html

    // map the array to html objs that will display a list

    // render check box as ingredients

    return(
<>
<form style={{ width: "100%" }}>
    
<div className="field">
                        <label htmlFor="title" className="label">Title: </label>
                        <div className="control">
                            <input type="text" name="title" required autoFocus className="input"
                                proptype="varchar"
                                placeholder="Title"
                            />
                        </div>
                        </div>
<div className="field">
                        <label htmlFor="date" className="label">Date: </label>
                        <div className="control">
                            <input type="text" name="date" required autoFocus className="input"
                                proptype="varchar"
                                placeholder="Date"
                            />
                        </div>
                        </div>
<div className="field">
                        <label htmlFor="image Link" className="label">Image Link: </label>
                        <div className="control">
                            <input type="text" name="image Link" required autoFocus className="input"
                                proptype="varchar"
                                placeholder="Image Link"
                            />
                        </div>
                        </div>
<div className="field">
                        <label htmlFor="post-Content" className="label">Post Content: </label>
                        <div className="control">
                            <input type="text" name="post Content" required autoFocus className="input"
                                proptype="varchar"
                                placeholder="Post Content"
                            />
                        </div>
                        </div>
                        </form>
</>
    )
}