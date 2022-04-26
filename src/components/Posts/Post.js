import React from "react";

export const Post = ({ post }) => {
    return (
        <article className='aPost'>
            <div className="message-body">
                <p className="post__title">{post.title}</p>
                <p className="post__name">{post.user?.first_name} {post.user?.last_name}</p>
                <p className="post__category">{post.category?.label}</p>
            </div>
        </article >
    )
}