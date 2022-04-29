export const getPosts = () => {
    return fetch("http://localhost:8088/posts")
        .then(res => res.json())
};

export const getPostById = (id) => {
    return fetch(`http://localhost:8088/posts/${id}`)
        .then(res => res.json())
}



export const searchPosts = (searchTerm) => {
    return fetch(`http://localhost:8088/posts?q=${searchTerm}`)
        .then(res => res.json())
};

export const addPost = post => {
    return fetch("http://localhost:8088/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
};

export const deletePost = (id) => {
    return fetch(`http://localhost:8088/posts/${id}`, {
        method: "DELETE"
    })
};

export const updatePost = post => {
    return fetch(`http://localhost:8088/post/${post.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
};

export const getMyPosts = (userId) => {
    return fetch(`http://localhost:8088/posts/${userId}`)
        .then(res => res.json())
};

