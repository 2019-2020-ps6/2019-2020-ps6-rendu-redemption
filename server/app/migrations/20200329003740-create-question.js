module.exports = {
  // Create the questions table.
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'questions',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      quizId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'quizzes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      label: {
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
  // Drop the questions table.
  down: (queryInterface, Sequelize) => queryInterface.dropTable('questions')
};
