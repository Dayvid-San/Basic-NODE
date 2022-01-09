const questions = [
    " O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = (index = 0) =>{
    process.stdout.write("\n\n" +questions[index] + " > ")
}

process.stdin.on('date', (date)=>{
    console.log(date);
})