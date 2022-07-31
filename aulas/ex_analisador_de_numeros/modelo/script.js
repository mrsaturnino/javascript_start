//armazenando as informações adicionadas aos inputs em variáveis
let num = document.querySelector('input#fnum') //document.querySelector para selecionar por elemento e id ('elemento#id')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] //vetor para organizar dado por dado. 

//Funções para tratar os números digitados:

function isNumero(n) { //verificando se o que foi digitado é um número entre 1 e 100.
    if (Number(n) >= 1 && Number(n) <= 100) { 
        return true
    } else {
        return false
    }
}

function inLista(n, li) {
    if (li.indexOf(Number(n)) != -1) { //se o valor digitado for diferente de -1 dentro do array
        return true
    } else {
        return false

    }
}

function adicionar() { //configurando o botão "adicionar"

    if (isNumero(num.value) && !inLista(num.value, valores)) { //verificando se o que foi digitado é um número ou não e se esse número já está ou não na lista.

        valores.push(Number(num.value)) //adicionando ao vetor o valor digitado no input do número.
        let item = document.createElement('option') //criando o elemento 'option' de forma dinâmica utilizando o DOM, para ser adicionado à tag <select>.
        item.text = `Valor ${num.value} adicionado.` //criando o texto que será apresentado dentro do item "option" criado.
        lista.appendChild(item) //inserindo o <option> criado para dentro do <select>.

        res.innerHTML = '' //Utilizando o DOM para limpar a div de 'resultado' cada vez que um número for adicionado.

    } else {
        window.alert('Valor inválido ou já se encontra na lista.')
    }
    num.value = '' //para esvaziar o input number
    num.focus() //para deixar selecionado o input para digitar o próximo número
}


function finalizar() { //configurando o botão "finalizar"

    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else { //criando a análise do vetor

        let tot = valores.length //Capturando a quantidade de números adicionados ao vetor.
        let maior = valores[0] 
        let menor = valores[0]
        //De início, os dois valores ocuparão a primeira posição [0] do vetor para serem comparados.
        let soma = 0
        let media = 0

        for(let pos in valores) { //leia-se: para cada posição no vetor 'valores', faça:

            soma += valores[pos] //os valores em cada posição serão somados por vez.

            if (valores[pos] > maior) //se o valor na posição que está sendo verificada for MAIOR que os outros números digitados, ele vai adicioná-lo naquela posição.
                maior = valores[pos]
            if (valores[pos] < menor) //se o valor na posição que está sendo verificada for MENOR que os outros números digitados, ele vai adicioná-lo naquela posição.
                menor = valores[pos]
        }
        media = soma / tot //MÉDIA sendo calculada após a varredura do vetor.

        //escrevendo os resultados utilizando o DOM na div "res".
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}



















