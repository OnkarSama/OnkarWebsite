document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.github.com/users/OnkarSama/repos')
        .then(response => response.json())
        .then(repos => {
            const projectsContainer = document.querySelector('.projects-container');
            repos.forEach(repo => {
                const div = document.createElement('div');
                div.className = 'project';
                div.innerHTML = `
                <a href="${repo.html_url}" target="_blank">
                    <h3>${repo.name}</h3>
                    <p>${repo.description || 'No description available'}</p>
                </a>`;
                projectsContainer.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching repos:', error));
});
