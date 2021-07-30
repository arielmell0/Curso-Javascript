//Criar função para mostrar números primos

exibirNumerosPrimos(10);

function exibirNumerosPrimos(limite){
    for(numero = 2; numero <= limite; numero++){
        let ePrimo = true;

        for(divisor = 2; divisor < numero; divisor++){
            if(numero % divisor === 0){
                ePrimo = false;
            }
        }

        if(ePrimo == true){
            console.log(numero);
        }
        
    }
}