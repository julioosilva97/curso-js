const nota = [5,6,10,4]

for(let i = 0;i< nota.length;i++){

    console.log(`A nota é : ${nota[i]}`)
}

//for in 

for(let i in nota){
    console.log(`A nota é : ${nota[i]}`)
}

//com objeto
const time = {
    nome:'São Paulo',
    cidade : {
        descricao:'São Paulo'
    }
}

for(let i in time){
    console.log(`Atributo : ${i} Descricao:${time[i]}`)
}