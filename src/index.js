import express from 'express'
import Cliente from "./models/cliente.js";
import Produto from "./models/produto.js";


const app = express();
app.use(express.json())
const port = 3000


app.get('/clientes', async (req, res) => {
    res.send(await Cliente.findAll())
})

app.get('/clientes/:id', async (req, res) => {
    res.send(await Cliente.findByPk(req.params.id))
})

app.post('/clientes', (req, res)=>{
    Cliente.create({nome: req.body.nome, dataNascimento: req.body.dataNascimento})
    res.send('Ok')
    
})

app.put('/clientes/:id', async (req, res) => {


    const resp = await Cliente.update({ nome: req.body.nome, dataNascimento: req.body.dataNascimento}, {
        where: {
            id: req.params.id
        }
    });
    res.send(resp)

})

app.delete('/clientes/:id', async (req, res) => {

    await Cliente.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send('deleted')
})


app.get('/produtos', async (req, res) => {
    res.send(await Produto.findAll())
})

app.get('/produtos/:id',async (req, res) => {
    res.send(await Produto.findByPk(req.params.id));

})

app.post ('/produtos', (req, res) => {
    Produto.create({descricao: req.body.descricao, preco: req.body.preco})
    res.send('Criado')

})


app.post('/produtos/:id', (req, res) => {
    res.send('Ok')

})


app.put('/produtos/:id', async (req, res) => {
    //const produtoEditar = alterarProduto (+req.params.id, req.body.descricao, req.params.preco)
   await Produto.update({descricao: req.body.descricao, preco: req.body.preco}, {
       where: {
           id: req.params.id
       }
    })
    res.send('Editado')
})


app.delete('/produtos/:id', async (req, res) => {

    await Produto.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send('Deletado')
})

app.listen(port, () => {
    console.log('Servidor funcionando...')
})