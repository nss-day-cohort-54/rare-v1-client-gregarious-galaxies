import React, { useEffect, useState } from "react";


export const Post = ({ post, categories }) => {
    return (
        <article className='aPost'>
            <div className="message-body">
                <p className="post__name">{post.user?.firstName} {post.user?.lastName}</p>
                <p className="post__category">{post.category?.label}</p>
                <p className="post__title">{post.title}</p>
                <p className="post__date">{post.date}</p>
                <p className="post__img">{post.imageUrl}</p>
                <p className="post__content">{post.content}</p>
            </div>
        </article >
    )
}