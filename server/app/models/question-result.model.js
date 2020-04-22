module.exports = (sequelize, DataTypes) => {
  // Define the question result model.
  const QuestionResult = sequelize.define('QuestionResult', {
    wrongAnswers: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    skipped: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    tableName: 'question_results',
    timestamps: false
  });

  // Define the result associations.
  QuestionResult.associate = (models) => {
    // A question result belongs to a result.
    QuestionResult.belongsTo(models.Result, {
      foreignKey: {
        name: 'resultId',
        primaryKey: true
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    // A question result belongs to a question.
    QuestionResult.belongsTo(models.Question, {
      foreignKey: {
        name: 'questionId',
        primaryKey: true
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  };

  // Remove the id column (f*ck you Sequelize).
  QuestionResult.removeAttribute('id');

  return QuestionResult;
};
