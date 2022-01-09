const express = require('express');
const app = express();

var acesso = 1
function soma(acesso){
    return acesso = acesso+novo;     
}
var novo = soma(acesso)

var myLogger = function (req, res, next) {
    console.log(novo)
    next()
  }
app.use(myLogger)



app.get('/', function (req, res, next){
    res.send('<h1>Hello world! I want peace and my family happy.<h1>')
   /* 
    
    next(`${novoNum(novoNum(acesso))} acesso`);
    */
   
})

app.listen(8000);
console.log('Está funcionando')