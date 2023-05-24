let texto = "Hola mundo";
let arr = [1, 2, 3]

//separar por coma cada palabra

let palabras = texto.split('');
let ultima = palabras.pop();
let primera = palabras.shift();

let = invertido = texto.split('').reverse().join('');

let total = arr.reduce((a, b) => a + b );
let primero = arr.shift();
let ultimo = arr.pop();
let existe = arr.some(numero => numero == 5);
let existe2 = arr.includes(2);

arr.filter((numero, index) => numero != 2);
console.log(total, primero, ultimo, existe, existe2, arr);

for(let i=1; i < 50; i++){
    if(i % 3 == 0 && i % 5 ==0){
        console.log("FizzBuzz");
    }
    else if(i % 3 == 0){
        console.log("Fizz");
    }
    else if(i % 5 == 0){
        console.log("Buzz");
    }
}