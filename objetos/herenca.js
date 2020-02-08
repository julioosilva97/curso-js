const selecaoBrasileira = {
    nome : 'Confederação Brasileira de Futebol',
    sigla : "CBF",
    falar(){
        console.log(`${this.nome} a famosa ${this.sigla}`)
    }
}

selecaoBrasileira.falar()

const selecaoMasculina = {
    genero : "Masculina",
    mundial : 5 ,
    falar(){
        console.log (`Seleção Brasileira de Futebol ${this.genero} tem ${this.mundial} titulo mundial`)
    }
}

Object.setPrototypeOf(selecaoMasculina,selecaoBrasileira) //aplicar a herença
selecaoMasculina.falar()

const selecaoFeminina = {
    __proto__:selecaoBrasileira, //outra forma de aplicar a heranca
    genero : "Feminina",
    mundial :0 ,
    falar(){
        console.log (`Seleção Brasileira de Futebol ${this.genero} tem ${this.mundial} titulo mundial`)
    }
}

console.log(selecaoFeminina.sigla)
console.log(selecaoMasculina.sigla)

const sub20 = Object.create(selecaoMasculina)
sub20.mundial = 1
sub20.falar()
