//variáveis globais que serão utilizadas pelos JSONs criados
var nome = "André Santos";
var idade = 20;
var genero = "masculino";

//JSON
/*
var user1 = {
    nome: nome,
    idade: idade,
    genero: genero
}
*/

//console.log(user)

//O JavaScript possibilita criar JSONs encurtados, onde apenas declarando o nome da variável global, o JSON criará os campos.

var user2 = {
    nome,
    idade,
    genero
}

console.log(user2)