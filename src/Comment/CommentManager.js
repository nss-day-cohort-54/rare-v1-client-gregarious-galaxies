export const getComments = () => {
    return fetch("http://localhost:8088/comments")
        .then(res => res.json())
};

export const addComment = comment => {
    return fetch("http://localhost:8088/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    })
};