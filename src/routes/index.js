import {Router} from "express";
import {clienteController, addressController, produtoController} from "../controllers/index.js";

const routes = Router()

routes.use('/clientes', clienteController)
routes.use('/addresses', addressController)
routes.use('/produtos', produtoController)

export default routes
