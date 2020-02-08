let times = ['spfc','santos','palmeiras']
times.push('guarani') //add um novo elemento  no final 
times[5] = 'ponte preta' //define onde será o endereço do array
console.log(times)
console.log(times.length) //tamanho do array
times.sort() //altera o array, deixa em ordem crescente
console.log(times)
delete time[5] //deleta determinado elemento 
times.splice(/*indice onde que add*/6,/*indice que quer excluir*/ 0,/*dados que vai add a partir ...*/'São caetano')

times.pop() //tira o primeiro elemento da lista 
times.shift() //tira o ultimo elemento da lista 
times.unshift() //add no começo do array
const times2 = times.slice(2 , /*menos, opcional*/ 5) // inicia um novo array a partir de determinado elemento, opção de tirar algum


