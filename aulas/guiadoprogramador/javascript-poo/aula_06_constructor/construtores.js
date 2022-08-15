class Filme {
    constructor(titulo, ano, genero, diretor, duracao){ //O construtor cria uma cópia da classe e utiliza esta cópia para instanciar objetos.
        this.titulo = titulo; //toda variável que é sucedida por um "this." referencia ao atributo da classe. Nesse caso, lê-se: this.atributo = parametro do constructor
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.duracao = duracao;
        this.atores = [];

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

//Utilizando um construtor para definir os valores dos atributos de um objeto:
var monteCristo = new Filme("O Conde de Monte Cristo", 2002, "Drama", "Kevin Reynolds", 2);

console.log(monteCristo.titulo)
console.log(monteCristo.diretor)
console.log()

//Outra forma de alterar atributos dos objetos criados

var arremessandoAlto = new Filme();

arremessandoAlto.titulo = "Arremessando Alto";
arremessandoAlto.ano = 2022;
arremessandoAlto.atores = "Adam Sandler";

console.log(arremessandoAlto.titulo)
console.log(arremessandoAlto.ano)
console.log(arremessandoAlto.atores)