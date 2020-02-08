const time = {
    nome : 'São Paulo',
    libertadores:3,
    mundial:3,
    rebaixamento:0,
    cidade : {
        descricao : 'São Paulo '
    }
}

const {nome,rebaixamento} = time //pegou somente nome e rebaixamento do objeto 

console.log(nome , rebaixamento)

const {nome:n,rebaixamento:r} = time //renomeia os atributos
console.log(n , r)

const {cidade:{descricao:d}}= time
console.log(d)


const [a,b, ,c] = [1,2,3] /// destructuring de um array
console.log(a,b,c)



//destructurinng com função
function mundial({nome,mundial}){ 
    return nome + mundial
}

console.log(mundial(time))




