module.exports = (sequelize, DataTypes) => {
  // Define the answer model.
  const Answer = sequelize.define(
    'Answer',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      value: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'The \'value\' input cannot be null.'
          },
          notEmpty: {
            args: true,
            msg: 'The \'value\' input cannot be empty.'
          }
        }
      },
      isCorrect: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
    {
      // Set the table name.
      tableName: 'answers'
    }
  );

  // Define the answer associations.
  Answer.associate = (models) => {
    // An answer belongs to a question.
    Answer.belongsTo(models.Question, {
      foreignKey: {
        name: 'questionId',
        allowNull: false
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    // An answer belongs to a quiz.
    Answer.belongsTo(models.Quiz, {
      foreignKey: {
        name: 'quizId',
        allowNull: false
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  };

  return Answer;
};
