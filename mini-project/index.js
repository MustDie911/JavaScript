function Users() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            let userListElement = document.getElementById('user-list');
            users.forEach(user => {
                const userElement = document.createElement('div');
                userElement.className = 'user';
                userElement.innerHTML = `<p>ID: ${user.id}</p><p>Name: ${user.name}</p><a href="user-details.html?id=${user.id}">Details</a>`;
                userListElement.appendChild(userElement);
            })
        .catch(error => console.error('error:', error));
        })}

document.addEventListener('DOMContentLoaded', Users);