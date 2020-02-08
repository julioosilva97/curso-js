const time = {
    nome : "São Paulo",
    libertadores : 3,
    mundial : 3
}

console.log(Object.keys(time)) // pega os valores das chaves(atributos)
console.log(Object.values(time)) //pega os valores dos atributos
console.log(Object.entries(time)) // criar um array como varis array para cada atributo

Object.entries(time).forEach(e =>{
    console.log(`${e[0]} : ${e[1]}`)
}) //percorrenco todos os arrary // e = elemento tirado do entries 

Object.prototype(time, 'rebaixamento',{

    //propriedas de um atributo, restrições e etc ... 
})

