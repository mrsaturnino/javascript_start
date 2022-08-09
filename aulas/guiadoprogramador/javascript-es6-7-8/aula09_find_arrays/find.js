var andre = {
    nome: "ANDRE SATURNINO",
    idade: 20
}

var alisson = {
    nome: "ALISSON SATURNINO",
    idade: 25
}

var estevao = {
    nome: "ESTEVAO SATURNINO",
    idade: 16
}

var alice = {
    nome: "ALICE SATURNINO",
    idade: 23
}

var users = [andre, alisson, estevao, alice];

//o ".find" funciona com uma arrow function, que retorna sempre um valor verdadeiro ou falso. 
var userName = users.find(user => user.nome === "ANDRE SATURNINO");


//**Funciona como o "forEach", o método ".find()" irá varrer todas as variáveis dentro do array até achar o valor da condicional, e retornar o primeiro objeto que for verdadeiro.
var userAge = users.find(user => user.idade > 20)

console.log(userName)

console.log("===================")
console.log(userAge)