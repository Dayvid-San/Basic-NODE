const finishEnd = () => console.log('done!')
const tim = 3000
const lit = 1000

let time = setInterval(finishEnd,lit)

setTimeout(clearTimeout(time),tim)