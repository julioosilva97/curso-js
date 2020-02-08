const times = ['São Paulo','Santos','Palmeiras']

function imprimir (nome, indice){
    console.log(`${indice+1}. ${nome}`)
}

times.forEach(imprimir)

//função callback é uma função que é disparada quando ocorre um evento 
//outro exemplo abaixo 

function criarTime (nome,estado){
    return{
        nome,
        estado
    }
}

console.log(criarTime('São Paulo','SP'))