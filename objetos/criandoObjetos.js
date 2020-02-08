// função new Object 
const obj1 = new Object

//notação literal
const obj2 = {}

//função construtora 
function Objeto(descricao){
    this.descricao = descricao
    this.falar= () =>{
        return `Sou um objeto e meu com descrição : ${descricao}`
    }
}
const obj3 = new Objeto('Maconha')
console.log(obj3.falar())

// função factory 

function criarFuncionario(nome,salario,faltas){
    return{
        nome,
        salario,
        faltas,
        calcularSalario : () => {
            return salario/30 * (30-faltas)
        }
    }
}

const obj4 = criarFuncionario('Julio',3000,10)
console.log(`O funcionario ${obj4.nome} vai receber R$ ${obj4.calcularSalario()} porque teve ${obj4.faltas} faltas`)


//Object.create

const obj5 =  Object.create(null)
console.log(obj5)

//deserializar Json para Objeto

const obj6 = JSON.parse('{"descricao":"Objeto"}')
console.log(obj6.descricao)

