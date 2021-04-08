const data = require("./data.json")

//sempre passar o indice ao consultar arrays .json
console.log(data.pessoa.redesSociais[0].facebook)

//transformar json em string
JSON.stringify(data)
console.log(data)

//transformar string em objeto json
JSON.parse(data)
console.log(data)