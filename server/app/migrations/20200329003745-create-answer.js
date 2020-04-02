module.exports = {
  // Create the answers table.
  up: (queryInterface, Sequelize) => queryInterface.createTable('answers', {
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
    questionId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'questions',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false
    },
    orderNb: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    value: {
      type: Sequelize.STRING,
      allowNull: false
    },
    isCorrect: {
      type: Sequelize.BOOLEAN,
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
  }),
  // Drop the answers table.
  down: (queryInterface, Sequelize) => queryInterface.dropTable('answers')
};
