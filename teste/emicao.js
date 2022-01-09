const {EventEmitter} = require('events')
const event = new EventEmitter


event.on(1, (message)=>{
    console.log('Numero um', message)
})

const pedido = 1

event.emit(pedido, 'bom resultado')