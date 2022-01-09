const {EventEmitter} = require('events')
const event = new EventEmitter

const date = new Date()
const [hora, minuto, segundo] = [date.getHours(), date.getMinutes(), date.getSeconds()]


event.on(date,(hour)=>{
    console.log(hour)
})


event.emit(date, hora)