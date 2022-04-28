export const getPosts = () => {
    return fetch("http://localhost:8088/posts")
        .then(res => res.json())
};

export const getPostById = (id) => {
    return fetch(`http://localhost:8088/posts/${id}`)
        .then(res => res.json())
}

export const getMyPosts = (userId) => {
    return fetch(`http://localhost:8088/posts/${userId}`)
        .then(res => res.json())
};