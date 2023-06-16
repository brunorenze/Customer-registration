import {Router} from "express";
import {Produto} from "../../models/index.js"


export const produtoController = Router()
.get('/', async (req, res) => {
    res.send(await Produto.findAll())
})

.get('/:id',async (req, res) => {
    res.send(await Produto.findByPk(req.params.id));

})

.post ('/', (req, res) => {
    Produto.create({descricao: req.body.descricao, preco: req.body.preco})
    res.send('Criado')

})


.post('/:id', (req, res) => {
    res.send('Ok')

})


.put('/:id', async (req, res) => {
    await Produto.update({descricao: req.body.descricao, preco: req.body.preco}, {
        where: {
            id: req.params.id
        }
    })
    res.send('Editado')
})


.delete('/:id', async (req, res) => {

    await Produto.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send('Deletado')
})

