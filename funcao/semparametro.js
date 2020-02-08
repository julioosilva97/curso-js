function somar(){
    let retorno = ""
    //arguments é um array dos parametros chamado na hora de chamar a função
    for(i in arguments){
        retorno += arguments[i]
    }

    return retorno
}

console.log(somar("Julio ","Cesar"))

