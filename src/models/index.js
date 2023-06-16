import Cliente from "./cliente.js";
import Produto from "./produto.js";
import Address from "./address.js";
import {db} from "../config/db/index.js";


Cliente.associate(db.models)
Produto.associate(db.models)
Address.associate(db.models)

export {Cliente, Produto, Address}