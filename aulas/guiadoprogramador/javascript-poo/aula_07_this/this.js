class Filme {
    constructor(titulo, ano, genero, diretor, duracao){ //O construtor cria uma cópia da classe e utiliza esta cópia para instanciar objetos.
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.duracao = duracao;
        this.atores = [];

    }
    
    Reproduzir(){
        console.log("Reproduzindo (...)");
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

    Ficha(){ //Aqui criamos um método que irá exibir os valores dos atributos de cada um dos objetos que chamem esse método.
        console.log("Título do filme: " + this.titulo)   //Basicamente, o "this" vai verificar em qual objeto ele está sendo executado e vai buscar o atributo daquele objeto em específico.
        console.log("Ano: " + this.ano)   
        console.log("Diretor: " + this.diretor)
        this.Reproduzir(); //também é possível chamar métodos da classe dentro de outros
    }

}


var monteCristo = new Filme("O Conde de Monte Cristo", 2002, "Drama", "Kevin Reynolds", 2);

monteCristo.Ficha();

//Utilizando o this em um método, é muito mais fácil do que fazer da maneira abaixo, criando um "console.log(objeto.atributo)" para exibir cada atributo.

console.log()

var arremessandoAlto = new Filme("Arremessando Alto", 2022, "Drama", "Adam Sandler");

console.log(arremessandoAlto.titulo)
console.log(arremessandoAlto.ano)
console.log(arremessandoAlto.genero)
