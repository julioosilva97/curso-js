

var num1 = 1 ;
var num2 = 5 ;
imprimirSomar(num1,num2)
function imprimirSomar(n1,n2){

    soma = n1 + n2;
    console.log(soma)
}

//armezanando funçao arrow em uma variavel 
const soma = (n1=0,n2=0) =>{
    return n1+n2
}

console.log(soma(5,5))

//com uma unica linha dentro da função (retorno implicito)
const soma2 = (n1=0,n2=0) => n1+n2

console.log(soma2(5,5))

