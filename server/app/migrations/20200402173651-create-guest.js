module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'guests',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    }
  ),
  // Drop the answers table.
  down: (queryInterface, Sequelize) => queryInterface.dropTable('guests')
};
