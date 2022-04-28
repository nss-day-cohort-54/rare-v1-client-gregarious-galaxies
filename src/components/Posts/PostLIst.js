import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Post } from "./Post";
import { getPosts, searchPosts } from "./PostManager";

export const PostList = () => {

    const [posts, setPosts] = useState([])
    const [query, setQuery] = useState("");


    let filteredPosts = posts.filter(post => {
        if (query === '') {
            return post
        } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
            return post
        }
    })




    useEffect(() => {
        getPosts().then(postData => setPosts(postData))
    },
        []
        //only runs on initial load
    )

    return (



        <>




            <div className="panel-block">
                <p className="control has-icons-left">
                    <input className="input is-primary" type="text" placeholder="Search" onKeyUp={
                        (event) => {

                            const query = event.target.value
                            setQuery(query)
                        }
                    } />
                </p>
            </div>






            {

                filteredPosts.map(post => {
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