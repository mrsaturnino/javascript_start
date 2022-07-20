function carregar() {
    //criando objetos para os elementos html
    var msg = window.document.getElementById('msg') //acessando e trazendo para o JavaScript os elementos do HTML com o DOM.
    var img = window.document.getElementById('imagem')

    //tratando o relógio da página
    var data = new Date() //criando uma instância da classe "Date()", que será armazenada na var "data";
    //var hora = data.getHours() //executando o método "getHours()" da classe "Date()" através da var "data".
        var hora = 12;
    msg.innerHTML = `Agora são ${hora} horas.` //exibindo no documento HTML as horas.

    //criando as condições respectivas de cada horário do dia

    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'foto_manha.jpg'
        document.body.style.background = '#D9B68B'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'foto_tarde.jpg'
        document.body.style.background = '#FF8748'
    } else {
        //Boa noite!
        img.src = 'foto_noite.jpg'
        document.body.style.background = '#1F3740'

    }

}

