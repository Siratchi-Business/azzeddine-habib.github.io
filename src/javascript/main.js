import('./animations/intro-animation.js')
    .then((module) => {
        console.log("Module loaded:", module);
    })
    .catch((error) => {
        console.error("Error loading the module:", error);
    });

import('./projects-api.js')
    .then((module) => {
        console.log("Module loaded:", module);
    })
    .catch((error) => {
        console.error("Error loading the module:", error);
    });

import('./backend-api-call.js')
    .then((module) => {
        console.log("Module loaded:", module);
    })
    .catch((error) => {
        console.error("Error loading the module:", error);
    });

import('./types.js')
    .then((module) => {
        console.log("Module loaded:", module);
    })
    .catch((error) => {
        console.error("Error loading the module:", error);
    });


