const service = require('./services')

Array.prototype.meuMap = function(callback){
    const novoArrayMapeado = []

    for(let count = 0; count < this.length - 1; count++){
        const resultado = callback(this[count], count)
        novoArrayMapeado.push(resultado)
    }

    return novoArrayMapeado
}

async function main(){
    try{
        const resultados = await service.obterPessoas('a')
        const names = resultados.results.meuMap((item, indice) => console.log(`[${indice}] ${item.name}`))
    }catch(error){
        console.error('Error : ', error)
    }
}

main()