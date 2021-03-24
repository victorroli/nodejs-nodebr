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

// const usuarioPromise = obterUsuario()
// usuarioPromise
//     .then(function(usuario){
//         return obterTelefone(usuario.id)
//             .then(function (result){
//                 return {
//                     usuario: {
//                         nome: usuario.nome,
//                         id: usuario.id
//                     },
//                     telefone: result
//                 }
//             })
//     })
//     .then(function(resultado){
//         const endereco = obterEnderecoAsync(resultado.usuario.id)
//         return endereco.then(function(result){
//             return {
//                 usuario: resultado.usuario,
//                 telefone: resultado.telefone,
//                 endereco: result
//             }
//         })
//     })
//     .then(function(resultado){
//         console.log('Resultado obtido: ', resultado)
//     }).catch(function(error){
//         console.log('Erro pego: ', error)
//     })

// obterUsuario(function resolverUsuario(error, usuario){
//     if(error){
//         console.error('Erro ao buscar Usuário', error)
//         return
//     }

//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
//         if(error1){
//             console.error('Erro ao buscar telefone', error1)
//             return
//         }
        
//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
//             if(error2){
//                 console.log('Erro ao buscar endereço', error2);
//                 return
//             }
            
            // console.log(`
            //     Nome: ${usuario.nome},
            //     Endereço: ${endereco.rua}, nº ${endereco.numero},
            //     Telefone: (${telefone.ddd}) ${telefone.telefone}
            // `);
//         })

//     })
// });

