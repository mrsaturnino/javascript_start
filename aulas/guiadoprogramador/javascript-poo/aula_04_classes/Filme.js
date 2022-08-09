class Filme {
    constructor(){ //Onde serão criados os atributos da classe
        //para criar os atributos, é igual a criar variaveis, so que com a adição do "this." antes do nome da var.

        this.titulo = '';
        this.ano = 0;
        this.genero = '';
        this.diretor = '';
        this.atores = [];
        this.duracao = 0;

    }
    //Criando os métodos da classe (apesar de serem funções, não precisa colocar o "function" antes. Basta começar com o nome do método.)
    
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