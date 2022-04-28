import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getPosts } from "./PostManager";

export const MyPostList = () => {
    const [posts, setPosts] = useState([])
    let currentUserId = parseInt(localStorage.getItem("token"))
    
    useEffect(() => {
        getPosts().then(postData => setPosts(postData))
    },
        []
    )
    
    const myPosts = posts.filter(post => post.user_id === currentUserId)

    return (
        <>
            {
                myPosts.map(post => {

                    return <div className="panel-block" key={post.id}>
                        <article className='aPost'>
                            <div className="message-body">
                                <Link to={`posts/details/${post.id}`} className="post__title">{post.title}</Link>
                                <p className="post__name">{post.user?.first_name} {post.user?.last_name}</p>
                                <p className="post__category">{post.category?.label}</p>
                            </div>
                        </article >
                    </div>
                })
            }
        </>
    )
};
