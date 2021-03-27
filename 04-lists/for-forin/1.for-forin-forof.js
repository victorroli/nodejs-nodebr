const service = require('./services')

async function main(){
    const resultado = await service.obterPessoas('a');
    const names = []

    console.time('for')
    for(let count=0;count<resultado.results.length -1; count++){
        names.push(resultado.results[count].name)
    }
    console.timeEnd('for')

    console.time('forin')
    for(let i in resultado.results){
        names.push(resultado.results[i].name)
    }
    console.timeEnd('forin')

    console.time('forof')
    for(pessoa of resultado.results){
        names.push(pessoa.name);
    }
    console.timeEnd('forof')

    console.log('Nomes pegos: ', names)
}

main()