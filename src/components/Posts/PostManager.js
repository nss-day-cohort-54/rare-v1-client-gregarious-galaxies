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