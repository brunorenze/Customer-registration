import { Sequelize } from "sequelize";

export const db = new Sequelize({
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'Bruno',
    password: '123456789',
    database: 'hamburgueria',
    timezone: '+01:00',
    define: {timestamps: true, underscored: true}
  });