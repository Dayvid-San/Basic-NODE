// setTimeOut rodar uma função depois de x milisegundos

const timeOut = 3000

const finishEnd = ()=> console.log('done!')

// Ele fai usar primeiramente a função como referência e em segundo o tempo
setTimeout(finishEnd, timeOut)
console.log('mostrar')