module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('products', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
      },
      name: {
        type: Sequelize.STRING(128),
        allowNull: false,
        unique: false,
      },
      branch: {
        type: Sequelize.STRING(128),
        allowNull: false,
        unique: false,
      },
      color: {
        type: Sequelize.ENUM('random', 'red', 'green', 'blue', 'gray', 'black'),
        allowNull: false,
        defaultValue: 'random',
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        unique: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    }),
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('products'),
};
