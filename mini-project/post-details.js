function PostDetails() {
    let urlParams = new URLSearchParams(window.location.search);
    let postId = urlParams.get('id');

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(post => {
            let postDetails = document.getElementById('post-details');
            postDetails.innerHTML = `
           <h1>Post Details</h1>
           <p>UserId: ${post.userId}</p>
           <p>ID: ${post.id}</p>
           <p>Title: ${post.title}</p>
           <p>Body: <i>${post.body}</i></p>`
            PostComments(postId)
        })
        .catch(error => console.error('error:', error));
}

function PostComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(res => res.json())
        .then(comments => {
            let commentList = document.getElementById('comment-list');
            comments.forEach(comment => {
                let commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');
                commentDiv.innerHTML = `<p>Name: ${comment.name}</p> <p>Email: ${comment.email}</p> <p>Body: ${comment.body}</p>`;
                commentList.appendChild(commentDiv);
            })
        })
        .catch(error => console.error('error:', error));
}

document.addEventListener('DOMContentLoaded', PostDetails);
