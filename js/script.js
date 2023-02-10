// json-server --watch db.json

let currentPokemonIndex = 0;
let pokemons = [];
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const actionButton = document.getElementById('btn-action');
const modal = document.querySelector('.modal');
const api = "http://localhost:3000/pokemon";


fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(pokemonData => {
        pokemons = pokemonData;
        updatePokemonDisplay(pokemons[currentPokemonIndex]);
    });

try {
    fetch(api)
    .then(response => response.json())
    .then(pokemonData => {
        pokemons = pokemonData;
        updatePokemonDisplay(pokemons[currentPokemonIndex]);
    });
} catch (error) {
    console.log('Achou nada')
}


prevButton.addEventListener('click', () => {
    currentPokemonIndex = (currentPokemonIndex - 1 + pokemons.length) % pokemons.length;
    updatePokemonDisplay(pokemons[currentPokemonIndex]);
});

nextButton.addEventListener('click', () => {
    currentPokemonIndex = (currentPokemonIndex + 1) % pokemons.length;
    updatePokemonDisplay(pokemons[currentPokemonIndex]);
});



function updatePokemonDisplay(pokemon) {
    const pokemonImg = document.getElementById('pokemon');
    const pokemonName = document.getElementById('name');
    const pokemonTypeImg = document.querySelector('.container-name img');

    pokemonImg.src = pokemon.img;
    pokemonName.textContent = pokemon.name;
    pokemonTypeImg.src = pokemon.type;
}