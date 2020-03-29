module.exports = {
  // Create the quizzes table.
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'quizzes',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
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
  // Drop the quizzes table.
  down: (queryInterface, Sequelize) => queryInterface.dropTable('quizzes')
};
