class Filme{
    //Ao invés de criar um objeto para acessar os métodos de uma classe, é possível tornar seus métodos em métodos estáticos com o "static", e assim chamar os métodos normalmente.

    static Reproduzir(){
        console.log("Reproduzindo [...]")
    }

    static Pausar(){
        console.log("Pausado [||]")
    }
}

Filme.Reproduzir(); //Chamando um método da classe criada sem precisar da criação de um objeto