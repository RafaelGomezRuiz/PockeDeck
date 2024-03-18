let urlPokemon = 'https://pokeapi.co/api/v2/pokemon'  
let nombre,especie,imagenPok,altura,peso,habilidades,ataques;  
let carta = document.createElement("div");  
let divPrincipal = document.getElementById("div-principal")  
const tabla = document.getElementById("tablaPokemon"); 
const btnBuscar = document.getElementById("btn-Buscar"); 
const indice = document.getElementById("Id-Pokemon"); 
const imagenPokemon = document.getElementById("imagenes"); 
 
btnBuscar.addEventListener("click", TraerDatos) 
 
function TraerDatos(){  
    fetch(urlPokemon +"/"+indice.value)  
    .then(pokemones => pokemones.json())  
    .then(pokemones => CrearCarta(pokemones) )  
}  
  
function CrearCarta(pokemones){  
        tabla.innerText = ""; 
        let movimientos = pokemones.moves.map(move => move.move.name);     
        agregarFila("Nombre", pokemones.name); 
        agregarFila("altura", pokemones.height) 
        agregarFila("peso",  pokemones.weight ) 
        agregarFila("habilidades", pokemones.abilities[0].ability.name) 
        agregarFila("ataques", movimientos.slice(0,3)) 
        imagenPok = pokemones.sprites.front_default;  
        CrearImagen(imagenPok); 
} 
 
 
function agregarFila(nombreAtributo, valorAtributo) { 
    const fila = tabla.insertRow(); 
    const celdaAtributo = fila.insertCell(0); 
    const celdaValor = fila.insertCell(1); 
    celdaAtributo.textContent = nombreAtributo; 
    celdaValor.textContent = valorAtributo; 
} 
 
function CrearImagen(imagenPok){ 
        const imagen = document.createElement('img'); 
        imagen.src = imagenPok;  
        imagen.style.width = '200px';  
        imagen.style.height = 'auto';  
        const contenedor = document.getElementById('contenedor-imagen'); 
        contenedor.innerText = ""; 
        contenedor.appendChild(imagen);  
}