class Negociacao{
    constructor(quantidade, valor){
        this._data = new Date()
        this._quantidade = quantidade
        this._valor = valor
    }
    
    obterVolume() {
        return this._quantidade * this._valor
    }

    get data(){
        return this._data
    }

    get quantidade(){
        return this._quantidade        
    }

    get valor(){
        return this._valor
    }

}