//Divisivel por 3 => Fizz
//Divisivel por 5 => Buzz
//Divisivel por 3 e 5 => FizzBuzz
//Não divisivel por 3 ou 5 => n1
//Não é um número => 'Não é um número'

function fizzBuzz(n1) {
    if (typeof n1 !== 'number') {
        return 'Não é um número'
    }

    if (n1 % 3 === 0 && n1 % 5 === 0) {
        return 'FizzBuzz'
    }

    if (n1 % 3 === 0) {
        return 'Fizz'
    }

    if (n1 % 5 === 0) {
        return 'Buzz'
    }

    if (n1 % 3 !== 0 && n1 % 5 !== 0) {
        return n1
    }

}

//a ordem importa

console.log(fizzBuzz(30))