fetch('https://azzeddine-habib-api.onrender.com/')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
