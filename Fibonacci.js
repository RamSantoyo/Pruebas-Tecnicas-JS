function fib(param){
    let a = 1;
    let b = 1;
    let c = 0;

    if(param > 2){
    for(let i = 3; i <= param; i++){
        c = a + b;
        a = b;
        b = c;
    }
    }else{
        c = 1;
    }

    console.log(c);
    return c;
}

fib(3) // 5

//representacion grafica

//1
//1 1
//1 1 2
//1 1 2 3
//1 1 2 3 5
//1 1 2 3 5 8
//1 1 2 3 5 8 13
//1 1 2 3 5 8 13 21