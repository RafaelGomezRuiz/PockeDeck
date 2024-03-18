const URL = 'https://pokeapi.co/api/v2/pokemon/';

const searchInput = document.getElementById('search');
const pokecontenedor = document.getElementById('pokedex');

function showError(message) {
    pokecontenedor.innerHTML = `<p class="error">${message}</p>`;
}

async function searchPokemon() {
   
    const searchedPokemon = searchInput.value.toLowerCase();

    try {
        // Realizar una petición a la API de PokeAPI con el nombre del Pokémon
        const response = await fetch(URL + searchedPokemon);
        if (!response.ok) {
            // Si la respuesta no es exitosa, mostrar un mensaje de error
            showError(`no se encontró ningún Pokémon llamado "${searchedPokemon}"`);
            return;
        }

        // Convertir la respuesta a JSON
        const data = await response.json();

        // Mostrar los datos del Pokémon en el contenedor de resultados
        pokecontenedor.innerHTML = 
        `
            <h2>${data.name.toUpperCase()}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}"></img>
            <p>Número: ${data.id}</p>
            <p>Altura: ${data.height / 10}m</p>
            <p>Peso: ${data.weight / 10}km</p>
        `;
    } catch (error) {
        // Si ocurre algún error durante la petición, mostrar un mensaje de error
        showError('Ha ocurrido un error al buscar el Pokémon');
        console.error(error);
    }
}

// Agregar un controlador de eventos al botón de búsqueda
document.querySelector('button').addEventListener('click', searchPokemon);