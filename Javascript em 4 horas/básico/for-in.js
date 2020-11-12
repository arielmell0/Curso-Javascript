//Iterar propriedades de arrays e objetos
//For in

//objeto
const pessoa = {
    nome: 'Ariel',
    idade: '18'
}

for(let chave in pessoa) {
    console.log(chave, pessoa[chave])
}

//array
const cores = ['Vermelho', 'Azul', 'Verde']

for(let indice in cores){
    console.log(indice, cores[indice])
}