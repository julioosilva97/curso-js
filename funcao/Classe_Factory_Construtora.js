//Classe
class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("Julio")
p1.falar()

//factory (funcao que sempre criar um objeto)

const pessoa = nome => {
    return{
        falar : () => console.log(`Meu nome é ${nome}`)
    }
}

let p2 = pessoa('Julio')
p2.falar()

//construtora 
function Pessoa(nome){
    this.nome = nome 
    this.falar = function(){
        console.log(`Meu nome é ${nome}`)
    }
}

const p3 = new Pessoa("Julio")
p3.falar()




