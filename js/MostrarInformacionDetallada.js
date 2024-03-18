document.addEventListener('DOMContentLoaded', function() {
const div = document.querySelector('div');
//
const pokemonDiv = document.getElementById('contenedor-imagen-tabla');
const tipoUl = document.getElementById('ul-type');
const weaknessUl = document.getElementById('ul-Weaknesses');


div.addEventListener('click',(e)=>{

        fetch(urlPokemon +"/"+e.currentTarget.id)  
        .then(pokemones => pokemones.json())  
        .then(pokemones =>{
            RenderizarPokemon(pokemones)
            window.location.href = "InformacionPokemon.html";
        })
})

const RenderizarPokemon=(pokemon)=>{
    // Renderizar imagen
    const imagen = document.querySelector('#imagen img');
    imagen.src = pokemon.sprites.front_default;
    imagen.alt = pokemon.name;

    // Renderizar nombre
    const nombreH1 = document.querySelector('h1');
    nombreH1.textContent = `Nombre: ${pokemon.name}`;

    // Renderizar tipos
    tipoUl.innerHTML = ''; // Limpiar contenido previo
    pokemon.types.forEach(tipo => {
        const li = document.createElement('li');
        li.textContent = tipo.type.name;
        li.classList.add(tipo.type.name); // Agregar clase para aplicar estilos
        tipoUl.appendChild(li);
    });
    function obtenerDebilidad(tipo) {
        // Simplemente como ejemplo, asumiremos que la debilidad de cada tipo es el tipo opuesto
        switch (tipo) {
            case 'normal':
                return 'fighting';
            case 'fire':
                return 'water';
            case 'water':
                return 'electric';
            // Agrega más casos según tus necesidades
            default:
                return 'none'; // Si no se encuentra una debilidad asociada, se devuelve 'none'
        }
    }
    // Renderizar debilidades
    weaknessUl.innerHTML = ''; // Limpiar contenido previo
    pokemon.types.forEach(tipo => {
        // Simplemente como ejemplo, asumiremos que la debilidad de cada tipo es el tipo opuesto
        const debilidad = obtenerDebilidad(tipo.type.name);
        const li = document.createElement('li');
        li.textContent = debilidad;
        li.classList.add(debilidad.toLowerCase()); // Agregar clase para aplicar estilos
        weaknessUl.appendChild(li);
    });
}


});