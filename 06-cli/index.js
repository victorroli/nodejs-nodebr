const {Command} = require('commander')
const Database = require('./database')
const Heroi = require('./heroi')

async function main(){

    const program = new Command()

    program
        .version('v1')
        .option('-n, --nome [value]', "Nome do herói")
        .option('-p, --poder [value]', "Poder do herói")
        .option('-i, --id [value]', "ID do herói")
        .option('-c, --cadastrar', "Cadastrar um herói")
        .option('-l, --listar', "Listar heróis cadastrados")
        .option('-r, --remover', "Remover heroi por id")
        .option('-a, --atualizar [value]', "Atualizar heroi por id")
        .parse(process.argv)

    const options = program.opts()
    const heroi = new Heroi(options)
        
    try {
        
        if(options.cadastrar){

            delete heroi.id
            
            const resultado = await Database.cadastrar(heroi)
            if(!resultado){
                console.error('Heroi não foi cadastrado!')
                return
            }
            console.log('Heroi Cadastrado com sucesso!')
        }

        if(options.listar){

            const resultado = await Database.listar()
            console.log('Resultado: ', resultado)
            return
        }

        if(options.remover){
            const resultado = await Database.remover(heroi.id)

            if(!resultado){
                console.error('Não foi possível remover o herói '+heroi.id)
                return
            }else{
                console.log('Herói removido com sucesso')
            }
        }

        if(options.atualizar){
            const idParaAtualizar = parseInt(options.atualizar)

            const dado = JSON.stringify(heroi)
            const heroiAtualizar = JSON.parse(dado)

            const resultado = await Database.atualizar(idParaAtualizar, heroiAtualizar)

            if(!resultado){
                console.error('Não foi possível atualizar o herói')
                return
            }

            console.log('Herói atualizado com sucesso!')
            
        }

    } catch (error) {
        console.error('Deu problema aqui: ', error)
    }
}

main()