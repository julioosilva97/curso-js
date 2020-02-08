function Libetadores(parametro = 0){
    //atributo privado da função
    let libertadores = parametro 

    //o this torna publico 
    this.falar = () => console.log(`seu time tem ${libertadores} liberatadores` ) 

}

let spfc = new Libetadores(3)
spfc.falar()
let palmeiras = new Libetadores(1)
palmeiras.falar() 
console.log(spfc) 

//usa-se a função para atribuir instancias para objetos diferentes