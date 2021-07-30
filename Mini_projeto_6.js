// Criar um método para ler propriedades de um objeto e 
// Exibir somente as propriedades  do tipo string que estão nesse objeto

const filme = {
    titulo : 'Vingadores',
    ano : 2018,
    diretor : 'Robin',
    personagem : 'Thor'
}

exibirPropriedade(filme)

function exibirPropriedade(obj){
    for(prop in obj){
        if(typeof obj[prop] === 'string'){
            console.log(prop, obj[prop])
        }
    }
}