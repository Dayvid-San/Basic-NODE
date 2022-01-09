const moneyApl = 500
const valorBolsaApl = 6.28
const novoValor = 24
const variacao_valor = () => {
    const numAcoes = moneyApl/valorBolsaApl
    return numAcoes*novoValor
}

const porcentagem = (x) => ((valorBolsaApl*novoValor)/100) + '%'

console.log(variacao_valor())
console.log(porcentagem())