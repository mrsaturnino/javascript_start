function soma(a,b) {
    return a + b;
}

var resultado = soma(1,2)

console.log(resultado) //forma normal de criar funções

var soma2 = (a,b) => {
    return a + b;
}

var result2 = soma2(1,8)
console.log(result2) //utilizando uma arrow function

//forma simplificada, omitindo o return:

var soma3 = (a,b) => a + b;

console.log(soma3(1,4))
