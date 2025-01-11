import('./intro-animation.js')
    .then((module) => {
        console.log("Module loaded:", module);
    })
    .catch((error) => {
        console.error("Error loading the module:", error);
    });
