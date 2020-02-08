//mapeia o array
const numero = [2.00,5.00,10.00]
const converterMoney = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
const dinheiro = numero.map(converterMoney) 
console.log(dinheiro)

// desafio 
const carrinho = [
    '{"nome":"Borracha","preco": 3.50}',
    '{"nome":"Borracha","preco": 3.50}',
    '{"nome":"Borracha","preco": 3.50}'
]


const paraObjeto = json => JSON.parse(json)
const soPreco = objeto => objeto.preco

const precos = carrinho.map(paraObjeto).map(soPreco)
console.log(precos)


//simulando o map()

Array.prototype.map2 = function(callback) {

    const array = []
    for(let i in this.length){ //this é o array que é chamado quando acionada a função map 
        array.push(callback(this[i],i,this)) ///tendi foi nada aqui 
    }

    return array
}

