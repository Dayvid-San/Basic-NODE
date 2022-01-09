const { inherits } = require('util');
const { EventEmitter } = require('events')

function characterName(name){
    this.name = name;
}

inherits(characterName, EventEmitter)

const chappolin = new characterName("Chappolin");
chappolin.on('help', () => console.log(`Eu, o ${chappolin.name} colorado`))

console.log('Oh! Quem poderá me defender?')
chappolin.emit('help')