//Velocidade máxima de até 70Km/h
//A cada 5km acima do limite você ganha 1 ponto
// Math.floor() => função que arredonda decimais
//Caso pontos maior que 12 => 'Carteira suspensa'

function verificarVelocidade(velocidade){
    if(velocidade <= 70){
        return 'Tudo ok por aqui'
    } else {
        const pontos = Math.floor((velocidade - 70)/5)
        if(pontos < 12){     
            return 'Você recebeu ' + pontos + ' pontos'
        }else{
            return 'Carteira suspensa'
        }
    }

}

console.log(verificarVelocidade(125))