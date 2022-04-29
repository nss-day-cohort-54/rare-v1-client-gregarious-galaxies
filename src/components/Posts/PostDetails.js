import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getComments } from "../../Comment/CommentManager";
import { getPostById } from "./PostManager";

export const PostDetails = () => {

    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    
    const history = useHistory()

    const { postId } = useParams()

    useEffect(() => {
        getPostById(postId).then(data => {

            return setPost(data)
        })
    }, [])

    useEffect(()=>{
        getComments()
        .then(commentData =>{
            setComments(commentData)
        })
    },[])


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
                <button onClick={() => history.push(`/posts/details/comment/${postId}`)}>Add Comment</button>
            </article >
            <article>
                <div className="comments">
                    <h2>Comments...</h2>
                    <div></div>
                </div>
            </article>
        </>
    )

}