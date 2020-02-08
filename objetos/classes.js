class Titulo{
    constructor(descricao, quantidade){
        this.descricao = descricao
        this.quantidade = quantidade
    }
}

class CalcularTitulos {
    constructor(nome){
        this.nome = nome 
        this.titulos = []
    }

    addTitulos(...titulos){
        titulos.forEach(t => this.titulos.push(t))
    }

    total(){
         let totalTitulos = 0

         this.titulos.forEach(l => {
             totalTitulos += l.quantidade
         })
         return `O time ${this.nome} tem ${totalTitulos} titulos`
    }



}

const libertadores = new Titulo('libertadores',3)
const mundial = new Titulo('Mundial',3)

const spfc = new CalcularTitulos('São Paulo')
spfc.addTitulos(libertadores,mundial)
console.log(spfc.total())


// exemplo com herança

class Avo {
    constructor(sobrenome ='Silva'){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{
    constructor(sobrenome,nome='Julio'){
        super(sobrenome)
        this.nome = nome
    }
}

let pai = new Pai
console.log(`${pai.nome} ${pai.sobrenome}`)