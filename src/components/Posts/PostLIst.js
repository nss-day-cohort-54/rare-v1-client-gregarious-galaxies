import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Post } from "./Post";
import { getPosts } from "./PostManager";

export const PostList = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts().then(postData => setPosts(postData))
    },
        []
        //only runs on initial load
    )

    return (
        <>
            {
                posts.map(post => {
                    return <div className="panel-block" key={post.id}>
                        <article className='aPost'>
                            <div className="message-body">
                                <Link to={`posts/${post.id}`} className="post__title">{post.title}</Link>
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