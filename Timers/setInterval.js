// setInterval irá rodar  uma função N vezes
// depois X milisegundos

const timeOut = 1000
const checking = () => console.log('Checking!')

// A função vai rodar por um tempo indefinido (até vc para-la)
setInterval(checking,timeOut)