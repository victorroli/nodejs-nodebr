const {obterPessoas} = require('./services')

Array.prototype.meuFilter = function(callback){
    const lista = [];
    for(index in this){
        const item = this[index]
        const result = callback(item, index, this)

        if(!result) continue;

        lista.push(item)
    }
    return lista;
}

async function main(){
    try{
        const {results} = await obterPessoas('a');
        
        const familiaLars = results.meuFilter((item, index, lista) => {
            console.log(index+' - '+lista.length);
            return item.name.toLowerCase().indexOf('lars') !== -1
        });

        const names = familiaLars.map((pessoa) => pessoa.name)
        console.log('Nomes pegos: ', names);
    }catch(error){
        console.error('Erro pego: ', error);
    }
}

main();