let compararThis2 = function(paramentro){
 console.log(this === paramentro)
}

//compararThis(global) // ele vai aposta o this dentro da funnção para o objeto global 

const obj = {}

compararThis2 = compararThis2.bind(obj)

compararThis2(global)
compararThis2(obj)

let compararThisArrow = param => console.log(this === param) 

compararThisArrow(global)
compararThisArrow(module.exports) /// sempre apoanta para o objeto instanciado com a função , não tem como alterar
