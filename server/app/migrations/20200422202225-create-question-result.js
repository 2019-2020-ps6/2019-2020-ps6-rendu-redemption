module.exports = {
  // Create the question_results table.
  up: (queryInterface, Sequelize) => queryInterface
    .createTable('question_results', {
      resultId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'results',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true
      },
      questionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'questions',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true
      },
      wrongAnswers: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      skipped: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
    }),
  // Drop the question_results table.
  down: (queryInterface) => queryInterface.dropTable('question_results')
};
