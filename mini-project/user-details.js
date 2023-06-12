function UserDetails() {
    let urlParams = new URLSearchParams(window.location.search);
    let userId = urlParams.get('id');

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(user => {
            let userDetails = document.getElementById('user-details');
            userDetails.innerHTML = `
<h2>User Details:</h2>
<p>ID: ${user.id}</p>
<p>Name: ${user.name}</p>
<p>Username: ${user.username}</p>
<p>Email: ${user.email}</p>
<p>Address: ${user.address.city}, ${user.address.street}, ${user.address.suite}, ${user.address.zipcode} (Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}) </p>
<p>Phone: ${user.phone}</p>
<p>Website: ${user.website}</p>
<p>Company: ${user.company.name}, <i>${user.company.catchPhrase}</i>, <i><strong>${user.company.bs}</strong></i></p>

<button class="show_post_btn" onclick="UserPosts(${user.id})">Post of current <user></user></button>`

        })
        .catch(error => console.error('error:', error));
}

function UserPosts(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(res => res.json())
        .then(posts => {
            let postListElement = document.getElementById('post-list');
            posts.forEach(post => {
                let postElement = document.createElement('div');
                postElement.className = 'post';
                postElement.innerHTML = `<p>Title: ${post.title}</p> <a href="post-details.html?id=${post.id}">Details</a>`;
                postListElement.appendChild(postElement);
            });
        })
        .catch(error => console.error('error:', error));
}

document.addEventListener('DOMContentLoaded', UserDetails);