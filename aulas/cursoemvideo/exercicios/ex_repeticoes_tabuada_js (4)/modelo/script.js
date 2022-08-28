function tabuada() { //armazenando os dados de entrada dos inputs HTML
    let num = document.getElementById('txtNum')
    let tab = document.getElementById('selectTab')

    //criando a lógica da tabuada

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')

    } else {
        let n = Number(num.value) //convertendo o número digitado
        let c = 1 //contador
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option') //criar o elemento "option" dentro da tag "select" do html; adicionando opções ao "select"
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item) //adicionando o item à div que contém a tag "select"
            c++ //incrementando o contador para multiplicar o número digitado até 10.
        }
    }
}