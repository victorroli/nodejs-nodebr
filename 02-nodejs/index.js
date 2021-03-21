/**
 * Obter um usuario
 * Obter o numero de telefone do usuário a partir do seu ID
 * Obter o endereço do usuário pelo Id
 * 
 */

function obterUsuario(callback){
    setTimeout(function() {
        return callback(null, {
            id: 1,
            nome: 'Client Test',
            dataNascimento: new Date()
        });
    }, 2000)
}

function obterTelefone(idUsuario, callback){
    setTimeout(function(){
        return callback(null, {
            telefone: '999999999',
            ddd: 38
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback){
    setTimeout(function(){
        return callback(null, {
            rua: 'Rua Dos bobos',
            numero: 0
        })
    }, 2000)
}

obterUsuario(function resolverUsuario(error, usuario){
    if(error){
        console.error('Erro ao buscar Usuário', error)
        return
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error1){
            console.error('Erro ao buscar telefone', error1)
            return
        }
        
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
            if(error2){
                console.log('Erro ao buscar endereço', error2);
                return
            }
            
            console.log(`
                Nome: ${usuario.nome},
                Endereço: ${endereco.rua}, nº ${endereco.numero},
                Telefone: (${telefone.ddd}) ${telefone.telefone}
            `);
        })

    })
});

