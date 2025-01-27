import('./animations/intro-animation.js')
    .then((module) => {
        console.log("Module loaded:", module);
    })
    .catch((error) => {
        console.error("Error loading the module:", error);
    });

import('./animations/dynamic-testimonials.js')
    .then((module) => {
        console.log("Module loaded:", module);
    })
    .catch((error) => {
        console.error("Error loading the module:", error);
    });

import('./animations/projects-api.js')
    .then((module) => {
        console.log("Module loaded:", module);
    })
    .catch((error) => {
        console.error("Error loading the module:", error);
    });

