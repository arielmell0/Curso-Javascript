// Criar função somar que retorna a
// soma de todos os múltiplos de 3 e 5

// Múltiplos de 3
// 3, 6, 9
// Múltiplos de 5
// 5, 10

// Somando os múltiplos 

somar(10)

function somar(limite){
    let multiplo3 = 0
    let multiplo5 = 0

    for(i = 0; i <= limite; i++){
        if(i % 3 === 0){
            multiplo3 += i
        }
        if(i % 5 ===0){
            multiplo5 += i
        } 
    }

    console.log(multiplo3 + multiplo5)    

}