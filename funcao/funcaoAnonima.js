let somar = function(n1,n2){return n1+n2}

let imprimirResultado = function(n1,n2,operacao=somar)/*somar é a outra função ali */{
    console.log(operacao(n1,n2))
}

imprimirResultado(2,2)





