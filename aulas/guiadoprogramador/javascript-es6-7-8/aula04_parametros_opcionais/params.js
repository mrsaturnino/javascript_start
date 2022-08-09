
//Em uma função, é obrigatório que em seus parâmetros sejam atribuídos algum valor.
function soma(a,b) {
    console.log(a + b)
} //Exemplo: se chamarmos "soma(10)", irá ocorrer um erro na soma, pois foi atribuído um valor a apenas um dos parâmetros.  


//Abaixo, logo na declaraçãog dos parâmetros da função, será atribuído um valor padrão apenas ao parâmetro "b", fazendo com que não exista obrigatoriedade para atribuir um valor a ele.
function sub(a,b = 80) {
    console.log(a - b)
} //Basta chamar a função 'sub()' com apenas o valor de "a".

//A função pode ser chamada com novos valores explícitos nos parâmetros ( sub(50, 20) ), sobreescrevendo os valores padrão dos parâmetros.

//Um detalhe importante é que os parâmetros opcionais têm que ser sempre os últimos, exemplo: soma(a, b, c = 20, d = 10)