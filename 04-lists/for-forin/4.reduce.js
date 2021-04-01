const {obterPessoas} = require('./services')

Array.prototype.meuReduce = function(callback, valorInicial){
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
    for(let index = 0; index <= this.length - 1; index++){
        valorFinal = callback(valorFinal, this[index], this)
    }
    return valorFinal;
}

async function main(){
    try{
        const {results} = await obterPessoas('a');
        /**
         * Pegar os pesos de todas as pessoas retornadas
         */
        const pesos = results.map(item => parseInt(item.height))
        // Inserindo reduce padrão
        // const total = pesos.meuReduce((anterior, proximo) => {
        //     return anterior + proximo;
        // }, 0)
        // console.log('Total de pesos pegos: ', total)

        const myList = ['Victor', 'Felipe', 'Teste', 'Curso']

        const resultFinal = myList.meuReduce((anterior, proximo) => {
            return anterior.concat(proximo)
        }, [])
        console.log('Resultado final: ', resultFinal)        

    }catch(error){
        console.error('Erro : ', error)
    }
}

main()