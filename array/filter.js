//filtra o array
const produtos = [
    {nome:"Notebook",preco:3000,fragil:true},
    {nome:"Iphone",preco:5000,fragil:true},
    {nome:"Copo de Vidro",preco:5,fragil:true},
    {nome:"Copo de Plastico",preco:3,fragil:false}
]

const caro = function(e){ return e.preco > 1000}
const fragil = e => {return e.fragil === true} 

console.log(produtos.filter(caro).filter(fragil))

Array.prototype.filter2 = function(callback){
    const Array = []
    for(let i = 0; i< this.length;i++){
        if(callback[i],[i],this){
            Array.push(this[i])
        }
    }

    return Array
}