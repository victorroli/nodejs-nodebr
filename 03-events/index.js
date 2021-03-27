const EventEmitter = require('events')

class MeuEmissor extends EventEmitter {
}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'

// Evento simulador de click
// meuEmissor.on(nomeEvento, function(click){
//     console.log('Um usuário clicou: ', click)
// })

// let count = 0
// setInterval(function(){
//     meuEmissor.emit(nomeEvento, 'teste do clique '+ count++)
// }, 2000)


const stdin = process.openStdin()

// Esse trecho vai ler quantas vezes o usuário digitar
// stdin.addListener('data', function(value){
//     console.log('Você digitou: ', value.toString().trim())
// })

/**
 * Usando Promises o valor será lido uma única vez
 */

function main() {
    return new Promise(function (resolve, reject) {
        stdin.addListener('data', function (value) {
            // console.log(`Voce digitou: ${value.toString().trim()}`)
            return resolve(value)
        })
    })
}

main().then(function (resultado) {
    console.log('resultado', resultado.toString())
})