fetch('https://api.github.com/users/siratchi-business/repos')
    .then(response => response.json())
    .then(data => {
        const projectGrid = document.getElementById('project-grid');

        data.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.classList.add('project-item');

            const projectTitle = document.createElement('h3');
            projectTitle.textContent = project.name; // Nombre del proyecto

            const projectDescription = document.createElement('p');
            projectDescription.textContent = project.description || 'No description available'; // Descripción del proyecto

            const projectLink = document.createElement('a');
            projectLink.href = project.html_url; // Enlace al repositorio de GitHub
            projectLink.textContent = 'Learn More';

            projectItem.appendChild(projectTitle);
            projectItem.appendChild(projectDescription);
            projectItem.appendChild(projectLink);

            projectGrid.appendChild(projectItem);
        });
    })
    .catch(error => console.error('Error fetching projects:', error));