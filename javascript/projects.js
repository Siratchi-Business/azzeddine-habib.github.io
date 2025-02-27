fetch('https://azzeddine-habib-api.onrender.com/api/projects')
    .then(response => response.json())
    .then(data => {
        const projectGrid = document.getElementById('project-grid');
        projectGrid.innerHTML = '';

        data.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.classList.add('project-item');

            const projectTitle = document.createElement('h3');
            projectTitle.textContent = project.name;

            const projectDescription = document.createElement('p');
            projectDescription.textContent = project.description || 'No description available';

            const projectLink = document.createElement('a');
            projectLink.href = project.html_url;
            projectLink.textContent = 'Learn More';
            projectLink.target = '_blank';

            projectItem.appendChild(projectTitle);
            projectItem.appendChild(projectDescription);
            projectItem.appendChild(projectLink);

            projectGrid.appendChild(projectItem);
        });
    })
    .catch(error => console.error('Error fetching projects:', error));
