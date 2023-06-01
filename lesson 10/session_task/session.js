let sessions = JSON.parse(localStorage.getItem('sessions'));
let sessionContainer = document.getElementById('sessionContainer');
if (sessions && sessions.length > 0) {
    sessions.forEach(function (session) {
        let sessionDiv = document.createElement('div');
        sessionDiv.innerText = session;
        sessionContainer.appendChild(sessionDiv);
    });
}

