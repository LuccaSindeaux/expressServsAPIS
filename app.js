const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
 res.send('Hello World!')
})

app.get('/produtos', (req, res)=> {
    res.send("Listar Produtos");
})

app.post('/produtos', (req, res)=> {
res.send("Inserir Produto");
})

app.get('/produtos/:id', (req, res)=> {
const id = req.params.id;
res.send("Buscar Produto com id: "+id);
})

app.put('/produtos/:id', (req, res)=> {
const id = req.params.id;
res.send("Atualizar Produto com id: "+id);
})

app.delete('/produtos/:id', (req, res)=> {
const id = req.params.id;
res.send("Deletar Produto com id: "+id);
})

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})