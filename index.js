
const express = require('express'); 
const routes = require('./src/router')

const port = 3000;
const app = express();

app.use(express.json())

//Rotas
app.use(routes)




app.listen(port, ()=>{
    console.log("serv on")
}
)