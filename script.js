console.log("I like Rin Tohsaka");

async function getPokemon() {
    try {
        const pokesearch = document.getElementById("pokesearch").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokesearch}`);
        if (!response.ok) {
            throw new Error("That is not a Pokémon");
        }
        const data = await response.json();
        const pokemonimg = data.sprites.front_default;
        
        let imgElement = document.getElementById("pokemonimg");
        if (!imgElement) {
            imgElement = document.createElement("img");
            imgElement.id = "pokemonimg";
            imgElement.alt = "Pokemon Image";
            imgElement.style.width = "200px";
            imgElement.style.height = "200px";
            document.getElementById("pokemonContainer").appendChild(imgElement);
        }
        imgElement.src = pokemonimg;
    } catch (error) {
        console.error(error);
        const defaultImg = "Assests\\maxresdefault.jpg"; // URL of the default image
        let imgElement = document.getElementById("pokemonimg");
        if (!imgElement) {
            imgElement = document.createElement("img");
            imgElement.id = "pokemonimg";
            imgElement.alt = "Pokemon Image";
            imgElement.style.width = "100px";
            imgElement.style.height = "100px";
            document.getElementById("pokemonContainer").appendChild(imgElement);
        }
        imgElement.src = defaultImg;
    }
    
}

