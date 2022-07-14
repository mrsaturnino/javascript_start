function verificar() {
    var data = new Date()

    var ano = data.getFullYear() //o método "getFullYear" pega o ano atual do sistema;

    var formAno = document.getElementById('anotxt')
    var res = document.querySelector('div#res')

    if (formAno.value.length == 0 || formAno.value > ano) { //se o tamanho do valor digitado no input "anotxt" for igual a 0 (zero) ou o valor for maior que o ano atual, faça:
        window.alert('[ ERRO ]Verifique se os dados estão corretos e tente novamente.')

    } else {
        var fsex = document.getElementsByName('radsex') //Coletando os elementos por meio do nome dos inputs. Ou seja, independente do gênero escolhido, o valor será coletado.

        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img') //criando um elemento HTML "img" com o DOM.
        img.setAttribute('id', 'foto') //criando atributos para o elemento "img"
        
        if (fsex[0].checked) { //Posição do radio "Masculino" no HTML é [0], ou seja, leia-se: se o botão "Masculino" for o selecionado, armazene o valor 'Masculino' na variável 'genero'.
            genero = 'Masculino'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade <50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }

        } else if (fsex[1].checked) { //Segue a mesma lógica do 'masculino' para o botão "Feminino".
            genero = 'Feminino'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade <50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Gênero ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}