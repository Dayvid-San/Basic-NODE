// cleartimeout cancela um timeout
const timeOut = 3000

const finishEnd = ()=> console.log('done!')
let time = setTimeout(finishEnd, timeOut)

clearTimeout(time)