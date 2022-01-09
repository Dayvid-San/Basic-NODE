//process.stdout.write('Alguma coisa')

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

const answers =[]

ask()
// Essa função está atenta para qualquer entrada de dados "data"
process.stdin.on("data", data => {
    //process.stdout.write(data.toString().trim())
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
})

// O processo tbm pode ouvir eventos
process.on('exit', ()=>{
    console.log(`
        Bacana, Dayvid!

        O que vc fez hoje foi:
        ${answers[0]}

        O que te aborreceu hoje foi:
        ${answers[1]}

        O que te deixou feliz hoje foi:
        ${answers[2]}

        Você ajudou ${answers[3]} pessoas hoje.

        Volte amanhão para novas reflexões!
    `)
})