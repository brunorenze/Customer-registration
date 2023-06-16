import {Router} from "express";
import {Address, Cliente} from "../../models/index.js";
import {differenceInYears} from "date-fns";


export const clienteController = Router()
    .get('/', async (req, res) => {
        const clientes = await Cliente.findAll({/*raw: true, nest: true,*/ include: [{model: Address, as: 'addresses'}]})
        const clientesComDataNascimento = clientes.map((cliente) => {
            cliente.dataValues.idade = differenceInYears( new Date(), cliente.dataValues.dataNascimento)
            return cliente
        })

        res.send(clientesComDataNascimento)
    })

    .get('/:id', async (req, res) => {
        res.send(await Cliente.findByPk(req.params.id))
    })
    .post('/', async (req, res) => {
        await Cliente.create({nome: req.body.nome, dataNascimento: req.body.dataNascimento})
        res.send('Ok')

    })
    .put('/:id', async (req, res) => {
        const resp = await Cliente.update({nome: req.body.nome, dataNascimento: req.body.dataNascimento}, {
            where: {
                id: req.params.id
            }
        });
        res.send(resp)
    })
    .delete('/:id', async (req, res) => {
        await Cliente.destroy({
            where: {
                id: req.params.id
            }
        });

        res.send('deleted')
    })
