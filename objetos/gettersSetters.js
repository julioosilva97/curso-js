const time = {
    _nome : "", //convenção 
    get nome(){return this._nome},
    set nome(nome){ this._nome = nome}
}

time.nome = "SPFC" //set 
console.log(time.nome) //get

