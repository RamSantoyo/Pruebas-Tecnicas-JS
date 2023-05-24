let vocales = {a: 0, e: 0, i: 0, o: 0, u: 0}

function conteoV(str){
    let cadena = str.toLowerCase().split('');

    for(let i= 0; i < cadena.length; i++){
        if(vocales.hasOwnProperty(cadena[i])){
            vocales[cadena[i]]++;
        }
    }

    let total = 0;

    for(key in vocales){
        total += vocales[key];
   }

   console.log(total)
   return total;

}

conteoV("@jrdeveloper")
