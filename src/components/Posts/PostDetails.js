import React, { useEffect, useState } from "react";
import { getTags } from "../Tags/TagManager";
import { useHistory, useParams } from "react-router-dom";
import { getComments } from "../../Comment/CommentManager";
import { getPostById } from "./PostManager";
import "./Post.css"

export const PostDetails = () => {

    const [post, setPost] = useState({})
    const [tags, setTags] = useState([])
    const [comments, setComments] = useState([])
    
    const history = useHistory()

    const { postId } = useParams()

    useEffect(() => {
        getPostById(postId).then(data => {

            return setPost(data)
        })
    }, [])
    useEffect(() => {
        getTags().then(data => {

            return setTags(data)
        })
    }, [])

    useEffect(()=>{
        getComments()
        .then(commentData =>{
            setComments(commentData)
        })
    },[])

    const filteredComments = comments.filter(comment => {
        if (comment.post_id === post.id){
            return comment
        }
    })


    return (
        <>
            <article className='aPost'>
                <div className="message-body">
                    <p className="post__title">{post.title}</p>
                    <p className="post__name">{post.user?.first_name} {post.user?.last_name}</p>
                    <p className="post__category">{post.category?.label}</p>
                    <p className="post__date">{post.date}</p>
                    <img className="post__img" src={post.image_url} />
                    <p className="post__content">{post.content}</p>
                   
                </div>
                <button onClick={() => history.push(`/posts/details/${postId}/comment`)}>Add Comment</button>
            </article >
            <article>
                <div className="comments">
                    <h2 className ="commentHeader">Comments...</h2>
                    <div>
                        {
                            filteredComments.map(comment=>{
                                return <>
                                <div key={comment.id} className="userComments">
                                    <p>{comment.username}</p>
                                    <p>{comment.content}</p>
                                </div>
                                </>
                            })
                        }
                    </div>
                </div>
            </article>
        </>
    )

}