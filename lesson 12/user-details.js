let urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        const userInfo = document.getElementById('userInfo');
        for (const [key, value] of Object.entries(user)) {
            const label = document.createElement('label');
            label.textContent = `${key}: `;
            const span = document.createElement('span');
            span.textContent = value;
            userInfo.appendChild(label);
            userInfo.appendChild(span);
            userInfo.appendChild(document.createElement('br'));
        }

    })