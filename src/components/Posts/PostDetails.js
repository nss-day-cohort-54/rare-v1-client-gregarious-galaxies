import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTags } from "../Tags/TagManager";
import { getPostById } from "./PostManager";

export const PostDetails = () => {

    const [post, setPost] = useState({})
    const [tags, setTags] = useState([])

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
            </article >
        </>
    )

}