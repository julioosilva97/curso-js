var numero = 1 
{
    var numero = 2 
    console.log("dentro do bloco =",numero)
}
console.log("Fora do bloco =",numero)

//o var não tem diferença quando está dentro do bloco ou não, um sobrescreeve do , somente quando é função 

let numerolet = 1 
{
   let numerolet = 2 
    console.log("dentro do bloco =",numerolet)
}
console.log("Fora do bloco =",numerolet)

//ao contrario do var, o tipo let é unico ao unico bloco


//for com var
for(var i=0;i<=5;i++){
    console.log(i)
}

console.log('i =',i) //continua visivel, pois é var

//for com let
for(let i=0;i<=5;i++){
    console.log(i)
}

console.log('i =',i) //ele não fica visivel , pois let se limita ao escopo




