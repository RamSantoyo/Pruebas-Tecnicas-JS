
const pedido = {
    producto: 'pizza',
    precio: 200,
    cliente: {
        nombre: 'Juan',
        direccion: {
            calle: 'calle',
            numero: '123'
        }
    },
    detalle: function(){
        console.log(`el nombre del cliente es ${this.cliente.nombre} y el producto es ${this.producto} con el precio de $ ${this.precio}`);
    }    
}

//pedido.detalle();


// Ejercicio 2
const recorrido = async() =>{
    try{
        const url =`https://pokeapi.co/api/v2/pokemon/`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.results);
        let nombres = data.results.map(pokemon => pokemon.name);//map devuelve un array con los nombres de los pokemones
        let filtrar = data.results.filter(pokename => pokename.name != 'charizard'); // filtrar los nombres que no sean charizard
        console.log(filtrar);
    }catch(error){
        return error;
    }
}


//ejercicio 3

const consulta = async() =>{
    try{
    const url = `https://pokeapi.co/api/v2/pokemon/`;
    const res = await fetch(url);
    const data = await res.json();
    let nombre = data.results.map(pokename => pokename.name);
    let filtrar = nombre.filter(pokename => pokename == 'charizard');
    let inversa = filtrar[0].split('').reverse().join('');
    console.log(inversa);
    }catch(error){
        return error;
    }
}

//consultar api
const consult = async() =>{
    try {
        const url = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await url.json();
        const resultados = data.results;
        let recorrido = resultados.map(pokename => pokename.name);            
        let filtrar = recorrido.filter(pokename => pokename == "charizard");
        texto.innerHTML = filtrar;
    } catch (error) {
        return error;
    }

}

//consultar api 2
const consultar = async() =>{
    try {
        const url = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await url.json();
        const resultados = data.results;
        for(nombre of resultados){
            if(nombre.name == "charizard"){
                texto.innerHTML = nombre.name;
            }
        }                     
    } catch (error) {
        return error;
    }
}

//consulta();


// Ejercicio 4
 const reversa = (parametro) =>{
    const invertir = parametro.split("").reverse().join("");
    return invertir;    
 }

let texto = document.querySelector('H1');
let texto2 = document.querySelector('H2');
let result = texto.innerHTML = reversa('RAMSESS');
let result2 = texto2.innerHTML = reversa(result);
