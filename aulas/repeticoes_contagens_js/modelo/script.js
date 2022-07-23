function contar() {
    //variáveis que armazenarão os valores digitados no input e o botão do resultado
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let result = document.getElementById('result')


    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados')
        result.innerHTML = 'Impossível contar!'
    } else {    
        result.innerHTML = 'Contando: '
        //convertendo os valores dos inputs para a contagem
        let iniVal =  Number(ini.value) //valor da var "ini" sendo convertido em um número e armazenado na var "iniVal"
        let fimVal = Number(fim.value)
        let passoVal = Number(passo.value)
        
        //pro caso de o valor do "passo" for igual a 0 (zero)
        if (passoVal == 0) {
            alert('Não é possível passar "de zero em zero".')
            alert('Contando automaticamente de 1 em 1...')
            passoVal = 1
        }


        //criando a lógica das contagens
        if (iniVal < fimVal) {

            //contagem sucessiva
            for (let c = iniVal; c <= fimVal; c += passoVal) { //
                result.innerHTML += ` ${c}  \u{1F3C0}`
                
            }
            result.innerHTML += `\n \u{1F3C1}`
            
        } else {

            //contagem regressiva
            for (let c = iniVal; c >= fimVal; c -= passoVal) {
                result.innerHTML += `${c} \u{1F3C0}`      
            }
            result.innerHTML += `\n \u{1F3C1}`
            
        }

        
    }
}