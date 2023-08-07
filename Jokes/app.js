const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');
const apiKey = "OWg61wIVor6P/lo6FJLu8g==54uy9rRCEn4sAIoJ";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

async function getJoke() {
    try {
        joke.innerText = "Updating...";
        btnEl.disapled = true;
        btnEl.innerText = "Loading...";
        const response = await fetch(apiURL, options);
        const data = await response.json();
        btnEl.disapled = false;
        btnEl.innerText = "Tell me a joke";
        jokeEl.innerText = data[0].joke;        
    } catch (error) {
        jokeEl.innerText = "An error happend. Try Again Later!";  
        btnEl.innerText = "Try Again"; 
        
    }
}

btnEl.addEventListener("click", getJoke);