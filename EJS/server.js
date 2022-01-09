const express = require('express');
const app = express();

app.set("view engine", "ejs");

const porta = 8080

app.get("/", function (req, res){
    const items = [
    {
        title: "D",
        message: "essenvolver aplicações/serviçoes de forma fácil"    
    },
    {
        title: "E",
        message: "JS, para um HTML inteligente"
    },
    {
        title: "M",
        message: "uito fácil"
    },
    {
        title: "A",
        message: "morzinho"
    },
    {
        title: "I",
        message: "nstall EJS"
    },
    {
        title: "S",
        message: "intaxa simples"
    },
    
    ]

    const subtitle = "EJS é uma linguagem de modelagem para a criação de páginas HTML ultilizando JS"
    res.render("pages/index",{
        qualidades: items,
        subtitle: subtitle,
    })
})

app.get("/sobre", function (req, res){
    res.render("pages/about")
})


app.listen(porta);
console.log("Rodando com a porta: "+porta);
