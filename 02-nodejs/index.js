/**
 * Obter um usuario
 * Obter o numero de telefone do usuário a partir do seu ID
 * Obter o endereço do usuário pelo Id
 * 
 */
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario(){

    return new Promise(function resolvePromise(resolve, reject ){
        
        setTimeout(function() {
            return resolve({
                id: 1,
                nome: 'Client Test',
                dataNascimento: new Date()
            });
        }, 2000)

    })

}

function obterTelefone(idUsuario){

    return new Promise(function resolverPromise(resolve, reject){

        setTimeout(function(){
            return resolve({
                telefone: '999999999',
                ddd: 38
            })
        }, 2000)

    })
}

function obterEndereco(idUsuario, callback){
    
        setTimeout(function(){
            return callback(null, {
                rua: 'Rua Dos bobos',
                numero: 0
            })
        }, 2000)

}

main()
async function main(){
    try{

        console.time('medida-promise')
        const usuario = await obterUsuario()
        
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])

        const endereco = resultado[1]
        const telefone = resultado[0]

        console.log(`
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd}) ${telefone.telefone},
            Endereço: ${endereco.rua}, nº ${endereco.numero}
        `)

        console.timeEnd('medida-promise')

    }catch(e){
        console.error(e)
    }
}
