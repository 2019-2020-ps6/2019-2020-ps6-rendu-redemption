module.exports = (sequelize, DataTypes) => {
  // Define the quiz model.
  const Quiz = sequelize.define(
    'Quiz',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'The \'name\' input cannot be null.'
          },
          notEmpty: {
            args: true,
            msg: 'The \'name\' input cannot be empty.'
          }
        }
      }
    },
    {
      // Set the table name.
      tableName: 'quizzes'
    }
  );

  // Define the quiz associations.
  Quiz.associate = (models) => {
    // A quiz has many questions.
    Quiz.hasMany(models.Question, {
      foreignKey: 'quizId'
    });

    // A quiz has many answers.
    Quiz.hasMany(models.Answer, {
      foreignKey: 'quizId'
    });
  };

  return Quiz;
};
