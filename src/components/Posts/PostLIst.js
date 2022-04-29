import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Post } from "./Post";
import { getPosts, searchPosts } from "./PostManager";
import { getCategories } from "./PostManager";


export const PostList = () => {

    const [posts, setPosts] = useState([]) //master copy, all my posts
    const [query, setQuery] = useState("");
    const [categories, setCategories] = useState([]);
    const [selectedCat, setSelectedCat] = useState("")
    const [filteredPosts, setFilteredPosts] = useState([]) //copy of posts, but safe to manipulate



    // let filteredPosts = posts.filter(post => {
    //     if (query === '') {
    //         return post
    //     } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
    //         return post
    //     }
    // })






    useEffect(() => {
        getCategories().then(catData => setCategories(catData))
    },
        []
        //only runs on initial load
    )



    useEffect(() => {
        getPosts().then(postData => {
            setPosts(postData)
            setFilteredPosts(postData)

        })
    },
        []
        //only runs on initial load
    )



    useEffect(() => {


        if (selectedCat.length > 0) {
            const filteredPostByCat = posts.filter(post => post.category_id == parseInt(selectedCat))
            setFilteredPosts(filteredPostByCat)

        } else { setFilteredPosts(posts) }

    },
        [selectedCat]
    )



    useEffect(() => {


        if (query.length > 0) {
            const filteredPostByQuery = posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
            setFilteredPosts(filteredPostByQuery)

        } else { setFilteredPosts(posts) }

    },
        [query]
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


            <div className="form-group">
                <label htmlFor="categoryDrop">Search by Category</label>
                <select
                    required autoFocus
                    type="text"
                    className="form-control"
                    onChange={
                        (event) => {

                            setSelectedCat(event.target.value)
                        }

                    }>
                    <option value="">Category...</option>
                    {categories.map(cat => <option value={cat.id}>{cat.label}</option>)}
                </select>




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