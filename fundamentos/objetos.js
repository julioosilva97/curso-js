const objeto = {} /// cria objeto vazio 

objeto.nome = 'Objeto' //cria um atributo para o objeto com notação ponto 
objeto['valor'] = 0 ////cria um atributo para o objeto com notação conchete

console.log(objeto)

//cria objeto já com atributo
const produto = {
    descricao:'Camisa',
    preco:50,
    tipo:{
        descricao:'roupa'
    }

}

console.log(produto)

//nao confudir objeto com json