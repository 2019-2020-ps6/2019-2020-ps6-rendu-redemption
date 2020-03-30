const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  // Define the question model.
  const Question = sequelize.define(
    'Question',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      label: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'The \'label\' input cannot be null.'
          },
          notEmpty: {
            args: true,
            msg: 'The \'label\' input cannot be empty.'
          }
        }
      }
    },
    {
      // Set the table name.
      tableName: 'questions'
    }
  );

  // Define the question associations.
  Question.associate = (models) => {
    // A question belongs to a quiz.
    Question.belongsTo(models.Quiz, {
      foreignKey: {
        name: 'quizId',
        allowNull: false
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    // A question has many answers.
    Question.hasMany(models.Answer, {
      foreignKey: 'questionId'
    });
  };

  return Question;
};
