class Negociacao{
    constructor(quantidade, valor){
        this._data = new Date()
        this._quantidade = quantidade
        this._valor = valor
    }
    
    obterVolume() {
        return this._quantidade * this._valor
    }

    getData(){
        return this._data
    }

    getQuantidade(){
        return this._quantidade        
    }

    getValor(){
        return this._valor
    }

}