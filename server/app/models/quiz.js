module.exports = (sequelize, DataTypes) => {
  // Define the quiz model.
  const Quiz = sequelize.define(
    'Quiz',
    {
      // Identifier of the quiz.
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      // Name of the quiz.
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

  return Quiz;
};
