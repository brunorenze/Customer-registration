import {Router} from "express";
import {Address, Cliente} from "../../models/index.js";


export const addressController = Router()
    .get('/', async (req, res) => {
        res.send(await Address.findAll({include: [{model: Cliente, as: 'cliente'}]}))
    })

    .get('/:id', async (req, res) => {
        res.send(await Address.findByPk(req.params.id))
    })

    .post('/', async (req, res) => {
        await Address.create({
            street: req.body.street,
            house_number: req.body.house_number,
            zip_code: req.body.zip_code,
            cliente_id: req.body.cliente_id
        })
        res.send('Ok')

    })

    .put('/:id', async (req, res) => {


        const respp = await Address.update({
            street: req.body.street,
            house_number: req.body.house_number,
            zip_code: req.body.zip_code
        }, {
            where: {
                id: req.params.id
            }
        });
        res.send(respp)

    })

    .delete('/:id', async (req, res) => {

        await Address.destroy({
            where: {
                id: req.params.id
            }
        });

        res.send('deleted')
    })