
const frase = ['--name', 'Dayvid Santana', '--greenting', 'Tudo bem com vc?']
const outro = frase.indexOf('coisa')
const nome = 'Dayvid Santana'
const saudacao = 'Tudo bem com vc?'

function getFlag(arg){
    const argr = arg
    //return ((argr.includes('--name')==true)&&(argr.includes('--greeting')==true) ? `Olá ${nome}. ${saudacao}` : (argr.includes('--name')==true) ? nome : (argr.includes('--greeting')==true) ? saudacao : 'Nenhum dos comandos foram solicitados')
    
    
    /*if (argr.includes('--name')===true) return nome
    if (argr.includes('--greenting'===true)) return saudacao
    else return 'Nenhum dos comandos foi solicitado'*/
}

function getFlagsValue(flag){
    const index = process.argv.indexOf(flag) + 1;
    return process.argv[index];
}

module.exports = getFlagsValue()


