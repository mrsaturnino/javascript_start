class Filme {
    constructor(){ 

        this.titulo = '';
        this.ano = 0;
        this.genero = '';
        this.diretor = '';
        this.atores = [];
        this.duracao = 0;

    }
    
    Reproduzir(){
        console.log("Reproduzindo...");
    }

    Pausar(){
        console.log("Pausado [ || ]");
    }

    Avançar(){
        console.log("Avançar [ >> ]");
    }

    Fechar(){
        console.log("Fechar [ X ]");
    }

}
//Criando objetos apartir da classe "Filme"

var avengers = new Filme(); //Criando um novo filme que será armazenado dentro da variavel "avengers".

//Acessando métodos e atributos da classe através de objetos

var starWars = new Filme();

console.log("Título do filme: " + starWars.titulo)
console.log("Ano do filme: " + starWars.ano)

starWars.Reproduzir();
starWars.Pausar();

//Alterando atributos dos objetos criados

var arremessandoAlto = new Filme();

arremessandoAlto.titulo = "Arremessando Alto";
arremessandoAlto.ano = 2022;
arremessandoAlto.atores = "Adam Sandler";

console.log(arremessandoAlto.titulo)
console.log(arremessandoAlto.ano)
console.log(arremessandoAlto.atores)

