//Abaixo, criaremos dois objetos JavaScript utilizando o conceito chave-valor.

var empresa = {
    nome_empresa: "Amazon",
    cidade: "Seattle"
}

var profissional = {
    nome: "André",
    idade: 20,
    profissao: "Desenvolvedor",
    ...empresa //com os "...", podemos referenciar o objeto criado lá em cima.
}

console.log(profissional)