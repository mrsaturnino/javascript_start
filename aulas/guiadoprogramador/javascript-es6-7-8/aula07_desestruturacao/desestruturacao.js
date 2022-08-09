var user = { //objeto js
    nome: "André",
    idade: 20,
    cidade: "Salvador",
    peso: 61.5
}

var {nome, idade, peso} = user; //a desestruturação permite armazenar campos de um objeto dentro de variáveis

console.log(nome) //var do campo "nome" do objeto "user"
console.log(idade)
console.log(peso)

var {cidade} = user; //também podemos criar outra desestruturação referenciando o mesmo objeto
console.log(cidade)

