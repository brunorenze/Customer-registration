'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('address', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cliente_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'cliente', key: 'id'},
        onUpdade: 'CASCADE',
        onDelete: 'CASCADE'
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING
      },
      house_number: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      zip_code: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Addresses');
  }
};