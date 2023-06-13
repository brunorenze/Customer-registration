import express from 'express'
import Cliente from "./models/cliente.js";
import Produto from "./models/produto.js";
import Address from "./models/address.js";


const app = express();
app.use(express.json())
const port = 3000

//-----------------------------------------Clientes--------------------------------------------------------------------
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
//___________________________________________________PRODUTOS__________________________________________________________

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

//_____________________________________________ADDRESS___________________________________________________________________

app.get('/addresses/', async  (req, res) => {
    res.send (await Address.findAll())
})

app.get('/addresses/:id', async (req, res) => {
    res.send(await Address.findByPk(req.params.id))
})

app.post('/addresses', async (req, res)=>{
   await Address.create({street: req.body.street, house_number: req.body.house_number, zip_code: req.body.zip_code, cliente_id: req.body.cliente_id})
    res.send('Ok')

})

app.put('/addresses/:id', async (req, res) => {


    const respp = await Address.update({ street: req.body.street, house_number: req.body.house_number, zip_code: req.body.zip_code}, {
        where: {
            id: req.params.id
        }
    });
    res.send(respp)

})

app.delete('/addresses/:id', async (req, res) => {

    await Address.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send('deleted')
})
//--------------------------------------------------------------------------------------------------------------------


app.listen(port, () => {
    console.log('Servidor funcionando...')
})