let elementos = document.querySelectorAll("a");

for(elemento of elementos){
    elemento.classList.contains("texto") ? elemento.classList.add("bbvassss") : " "
}

for(let i=0; i < elementos.length; i++){
    elementos[i].textContent.includes("ejemplo") ? elementos[i].textContent = "bbva" : " "
}


//encontrar grupos binarios

let s = "0110010010";

function encontrarGruposBinarios(s){
    
    let cadena = s.split("");
    let coincidencias = {"01":0, "10":0, "1100":0, "0011":0};

    for(let i=0; i < cadena.length; i++){
        if(cadena[i] == "0" && cadena[i+1] == "1"){
            coincidencias["01"]++;
        }else if(cadena[i] == "1" && cadena[i+1] == "0"){
            coincidencias["10"]++;
        }else if(cadena[i] == "1" && cadena[i+1] == "1" && cadena[i+2] == "0" && cadena[i+3] == "0"){
            coincidencias["1100"]++;
        }else if(cadena[i] == "0" && cadena[i+1] == "0" && cadena[i+2] == "1" && cadena[i+3] == "1"){
            coincidencias["0011"]++;
        }
    }

    let total = 0;

    for(key in coincidencias){
        total += coincidencias[key];
    }

    console.log(coincidencias);
    console.log(total);
}
encontrarGruposBinarios(s);

//funcion que la longitud de la cadena abacaba es 7 y las cadenas que se pueden formar son abc, bca, cab, acb, cba y bac el maximo lexicografico es cba asi que retorna cba y en el otro ejemplo la entrada es aazb con una longitud de 4 y la unica cadena que se puede formar es azb

//entrada abacaba salida cba maximo lexicografico

let input_str = "abacaba";

function getString(input_str) {
    let coincidencias = {};

    for(let i=0; i < input_str.length; i++){
        if(coincidencias[input_str[i]]){
            coincidencias[input_str[i]]++;
        }else{
            coincidencias[input_str[i]] = 1;
        }
    }

    let cadena = "";

    for(key in coincidencias){
        cadena += key;
    }

    let cadenaOrdenada = cadena.split("").sort().join("");

    return cadenaOrdenada;
}