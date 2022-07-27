//resgatando valores de entrada dos inputs e botão
let num = document.querySelector('input#textNum')
let list = document.querySelector('input#textList')
let result = document.querySelector('div#result')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        window.alert('Tudo certo!')
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}