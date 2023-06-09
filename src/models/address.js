import {Model, DataTypes} from 'sequelize';
import {db} from "../config/db/index.js";

class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Address.init({
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        street: {
          type: DataTypes.DECIMAL(10,2),
          allowNull: false
        },
        house_number: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false
        },
        zip_code: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false
        },

        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
      },
      {
        sequelize: db,
        modelName: 'Address',
        tableName: 'address'
      });

export default Address