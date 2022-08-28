var a = document.getElementsByClassName('num1')
var b = document.getElementsByClassName('num2')


var p = function gerarNumero(a, b){
    return Math.floor(Math.random() * (b - a + 1)) + a
}

console.log(p)

/*
function testarBotao() {
    document.getElementById('result').innerHTML = "o botão está funcionando!"
}
*/
