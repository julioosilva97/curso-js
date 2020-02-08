function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1- this.desconto) * (1+imposto)}`
}

const produto = {
    nome : 'Notebook',
    preco : 4000,
    desconto : 0.50,
    getPreco /*a função já fica como parametro , pois já foi declarada*/
}

console.log(produto.getPreco())

console.log(getPreco.call(produto))
console.log(getPreco.call(produto,0.10,'$')) //primeiro sempre o objeto , depois os parametros a serem utilizados na funcao 
console.log(getPreco.apply(produto,[0.10])) // no apply os parametro é passado em forma de array 

