//ejercicios de filter
let personas = [
    { nombre: 'Juan', edad: 17 },
    { nombre: 'Maria', edad: 25 },
    { nombre: 'Pedro', edad: 19 },
    { nombre: 'Lucia', edad: 12 }
  ];
  
let filtro = personas.filter((persona, idex) => persona.edad >= 18);

console.log(filtro);


let numeros = [1, 2, 3, 4, 5, 6];

let pares = numeros.filter((numero, index) => numero % 2 == 0);

console.log(pares);


let palabras = ['hola', 'adios', 'luna', 'sol', 'mundo', 'cielo'];

let condicion = palabras.filter((palabra, index) => palabra.includes('l'));

console.log(condicion);

let empleados = [
    { nombre: 'Juan', edad: 30, salario: 1000 },
    { nombre: 'Pedro', edad: 25, salario: 1500 },
    { nombre: 'María', edad: 35, salario: 2000 },
    { nombre: 'Ana', edad: 28, salario: 1200 },
    { nombre: 'Luis', edad: 40, salario: 3000 },
  ];

  let mayores = empleados.filter((empleado, index) => empleado.edad >= 30 && empleado.salario > 1500);

console.log(mayores);


//ejercicios de map

const nums = [1, 2, 3, 4, 5];

let multiplicar = nums.map((numero, index) => numero * 2);

console.log(multiplicar);


const persons = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 20 }
  ];

let nombres = persons.map((nombre, index)  => nombre.nombre)

console.log(nombres);// crea un nuevo array con los nombres de las personas


let name = persons.filter((nombre, index) => nombre.nombre);

console.log(name);// devuelve un array con los nombres de las personas

const estudiantes = [
    { nombre: "Juan", notas: [3.5, 4.2, 3.9, 4.8, 3.0] },
    { nombre: "María", notas: [4.5, 4.9, 4.8, 4.2, 4.7] },
    { nombre: "Pedro", notas: [2.9, 3.8, 3.1, 2.5, 3.0] }
  ];


  let promedio = estudiantes.map((estudiante, index) => estudiante.notas.reduce((a, b) => a + b) / estudiante.notas.length)
  
console.log(promedio);


//ejercicios de ForEach
let longitud = [];
palabras.forEach(function(palabra) {
    longitud.push(palabra.length);
});

console.log(longitud);


const libros = [  
    {titulo: 'El arte de amar', autor: 'Erich Fromm'},  
    {titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez'},  
    {titulo: 'El hobbit', autor: 'J.R.R. Tolkien'},  
    {titulo: '1984', autor: 'George Orwell'}];

function obtenerTitulos(libros){ 
    let arr=[]; 
    libros.forEach(function(titulo){arr.push(titulo.titulo)})
    return arr;
}

const titulos = obtenerTitulos(libros);
console.log(titulos);


//ordena la palabra al reves

let palabra = 'hola';

const invertir= (palabra) => palabra.split('').reverse().join('');

console.log(invertir(palabra));

//extraer el primer elemento de un array

let arreglo = [5, 2, 4, 3, 1];

//extraer el primer elemento de un array
console.log(arreglo.shift());

//extraer el ultimo elemento de un array
console.log(arreglo.pop());

//ordenar un array de numeros
console.log(arreglo.sort());

//retorna el arreglo entre los indices 3 y 5
console.log(arreglo.slice(3, 5));

//retorna el arr sin los dos primeros elementos y regresa los dos primeros elementos
console.log(arreglo.splice(2, 2));