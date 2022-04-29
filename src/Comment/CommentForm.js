import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { addComment } from "./CommentManager";

export const CommentForm = () => {
    const { postId } = useParams()
    
    const [comment, setComment] = useState({
        author_id: parseInt(localStorage.getItem("token")),
        post_id: parseInt(postId),
        content: ""
    })

    const history = useHistory()


    const handleInputChange = (event)=>{
        const newComment = Object.assign({}, comment)
        newComment[event.target.name] = event.target.value
        setComment(newComment)
    }
    
    const submitNewComment = () => {
        const copyComment = {...comment}
        copyComment.author_id = parseInt(copyComment.author_id)
        copyComment.post_id = parseInt(copyComment.post_id)
        addComment(copyComment)
        .then( () => history.push(`/posts/details/${postId}`))
    }

    return(
        <form>
            <h2>Add Your Comment</h2>
            <fieldset>
                <div className ="form-group">
                    <input 

                        required autoFocus
                        proptype="varchar"
                        name="content"
                        type = 'text'
                        className="form-control"
                        placeholder = "Comment here..."
                        onChange ={handleInputChange}
                    />
                </div>
                <div className="field">
                    <button type ="submit"
                        onClick={evt => {
                            evt.preventDefault()
                            submitNewComment()
                        }}
                        className ="button">
                        Submit Comment
                    </button>
                </div>
            </fieldset>
        </form>
    )
}