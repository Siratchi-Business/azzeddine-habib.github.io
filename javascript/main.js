const modulesToLoad = [
    {
        path: './darkmode.js',
        onLoad: (module) => {
            console.log("Darkmode module loaded:", module);
            document.querySelector('.dark-mode-toggle')
                .addEventListener('click', module.toggleDarkMode);
        }
    },
    {
        path: './animations/intro-animation.js',
        onLoad: (module) => {
            console.log("Intro animation module loaded:", module);
        }
    },
    {
        path: './projects.js',
        onLoad: (module) => {
            console.log("Projects module loaded:", module);
        }
    },
    {
        path: './types.js',
        onLoad: (module) => {
            console.log("Types module loaded:", module);
        }
    },
    {
        path: './backend-api-call.js',
        onLoad: (module) => {
            console.log("Backend API module loaded:", module);
        }
    }
];

// Importación dinámica y ejecución del callback específico
modulesToLoad.forEach(({ path, onLoad }) => {
    import(path)
        .then((module) => {
            onLoad(module);
        })
        .catch((error) => {
            console.error(`Error loading the module: ${path}`, error);
        });
});
