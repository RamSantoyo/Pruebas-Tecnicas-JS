//pares de numeros que sumen 11

let arr = [4, 2, 9, 5, 7]

let objetivo = 11;

let pares = [];

for(let i =0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === objetivo) {
          pares.push([arr[i], arr[j]]);
        }
    }
}

console.log(pares)

//numeros repetidos
const array = [2, 4, 6, 8, 4, 2, 10, 6];

const limpio = []

for(let i= 0; i < array.length; i++){
    if(!limpio.includes(array[i])){
        limpio.push(array[i])
    }
}

const lim = new Set(array);

console.log(lim)
console.log(limpio)


//Palíndromo

let str = "reconocer";

let str2 = str.split('').reverse().join('');

if(str === str2){
    console.log("Es palindromo")
}else{
    console.log("No es palindromo")
}


//ordenar array
let arreglo = [4, 2, 9, 5, 7]

let ordenado = arreglo.sort((a,b) => a - b)
console.log(ordenado.pop())





