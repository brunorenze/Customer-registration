import {Model, DataTypes} from 'sequelize';
import {db} from "../config/db/index.js";

class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Cliente.hasMany(models.Address, {as: 'addresses'})
        // define association here
    }
}

Cliente.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dataNascimento: {
            type: DataTypes.DATE,
            allowNull: false
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        sequelize: db,
        modelName: 'Cliente',
        tableName: 'cliente'
    }
);

export default Cliente
