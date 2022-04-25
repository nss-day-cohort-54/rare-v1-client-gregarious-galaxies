import React, { useEffect, useState } from "react";
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
                    return <div className="panel-block">
                        <Post
                            key={post.id}
                            post={post}
                        />
                    </div>
                })
            }
        </>
    )

};