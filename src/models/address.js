import {Model, DataTypes} from 'sequelize';
import {db} from "../config/db/index.js";

class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.belongsTo(models.Cliente, {foreignKey: 'cliente_id', as: 'cliente'})

        // define association here
    }
}

Address.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cliente_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: { model: 'cliente', key: 'id'},
            onUpdade: 'CASCADE',
            onDelete: 'CASCADE'
        },

        street: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        house_number: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        zip_code: {
            type: DataTypes.STRING,
            allowNull: false
        },

        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    },
    {
        sequelize: db,
        modelName: 'Address',
        tableName: 'address'
    }
);


export default Address