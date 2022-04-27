import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getMyPosts, getPosts } from "./PostManager";

export const MyPostList = () => {

    const [myPosts, setMyPosts] = useState([])
    const {userId} = useParams()

    useEffect(() => {
        getMyPosts(userId).then(postData => setMyPosts(postData))
    },
        [userId]
    )

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

// {
//     token
//       ?
//       <Route>
//         <NavBar token={token} setToken={setToken} />
//         <ApplicationViews />
//       </Route>
//       :
//       <Redirect to="/login" />
//   }