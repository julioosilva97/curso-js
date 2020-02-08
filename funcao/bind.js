const time = {
    nome : "São Paulo",
    pronunciar(){
        console.log(`o melhor time é ${this.nome}`)
    }
}
//time.pronunciar()

let melhorTime = time.pronunciar.bind(time) //aqui 

melhorTime()

///outra forma de usar this e bind 


function MundialPalmeiras(){
   
    this.ano = 1951

    const self = this 
    setInterval(function(){
        self.ano++
        console.log(`O ano é ${self.ano} e o palmeiras tem 0 mundial`)
    } , 2000)
}

new MundialPalmeiras

