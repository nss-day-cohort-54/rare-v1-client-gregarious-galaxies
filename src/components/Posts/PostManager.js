export const getPosts = () => {
    return fetch("http://localhost:8088/posts")
        .then(res => res.json())
};

export const getPostById = (id) => {
    return fetch(`http://localhost:8088/posts/${id}`)
        .then(res => res.json())
}

export const addPost = Post => {
    return fetch("http://localhost:8088/new-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(Post)
    }).then(getEntries);
  };
  
  export const deletePost = postId => {
    return fetch(`http://localhost:8088/post/${postId}`, {
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
  
  