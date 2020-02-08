//funcao anonima dentro de um atributo de um objeto 

const pessoa = {
    nome:'Julio',
    falar : function(){

        return `meu nome é ${this.nome}`
    }
}

console.log(pessoa.falar())


