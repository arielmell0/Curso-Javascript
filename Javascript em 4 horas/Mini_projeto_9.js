//Criar uma função que exiba a quantidade de * 
//que aquela linha possui

exibirAsteriscos(10);

//Forma mais simples

/* function exibirAsteriscos(linhas){
    let padrao = '';

    for(linha = 1; linha <= linhas; linha++){
        padrao += '*';
        console.log(padrao);
    }
} */

//A outra forma utilizando loops
function exibirAsteriscos(linhas){
    for(linha = 1; linha <= linhas; linha++){
        let padrao = '';
        for(i = 0; i < linha; i++){
            padrao += '*';
        }
        console.log(padrao);
    }
}