//Receber uma quantidade de valores para avaliar 
//Função exibe se cada valor é par ou ímpar

function parImpar(valor) {
    for (let i = 0; i <= valor; i++ ) {
        if (i % 2 === 0){
            console.log(i, 'PAR')
        } else {
            console.log(i, 'IMPAR')
        }
    }
}

console.log(parImpar(10))