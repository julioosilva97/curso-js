const times = [
    {nome : "SPFC", libertadores: 3.0, rebaixado : false},
    {nome : "Santos", libertadores: 3.0, rebaixado : false},
    {nome : "Palmeras", libertadores: 1.0, rebaixado : true}
]

const totalLibertadores = times.map(e => e.libertadores).reduce(function(acumulador,atual){
    return acumulador + atual
},0 ) /*se eu quiser iniciar o acumulador, pode ser um array*/

console.log(totalLibertadores)

// Todos os times foram rebaixados ? true ou false 
const todosRebaixador = (resultado,rebaixado) => resultado && resultado

console.log(times.map(e => e.rebaixado).reduce(todosRebaixador))

// Algum time já foi rebaixado 
const jaRebaixado = (resulta,rebaixado) => rebaixado === true
console.log(times.map(e => e.rebaixado).reduce(jaRebaixado))



