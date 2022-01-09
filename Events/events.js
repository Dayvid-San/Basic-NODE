// Função do tipo classe
const { EventEmitter } = require('events');

const ev = new EventEmitter()

// Ouvido
ev.on('say something', (message)=>{
    console.log("Eu ouvi vc", message)
})

// faz com que dispare apenas uma vez
ev.once('say something', (message)=>{
    console.log("Eu ouvi vc", message)
})

// emitir (fala) algum evento
ev.emit('say something', 'Dayvid')
ev.emit('say something', 'João')
ev.emit('say something', 'Maria')
