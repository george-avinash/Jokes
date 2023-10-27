document.getElementById("loadJoke").addEventListener("click", () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            const jokeContainer = document.getElementById("jokeContainer");
            jokeContainer.innerHTML = `
                <p>${data.setup}</p>
                <p>${data.punchline}</p>
            `;
        })
        .catch(error => {
            console.error("An error occurred:", error);
        });
});
