module.exports = (sequelize, DataTypes) => {
  // Define the quiz model.
  const Quiz = sequelize.define('Quiz', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    }
  },
  {
    tableName: 'quizzes'
  });

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

    // A quiz belongs to many guests.
    Quiz.belongsToMany(models.Guest, {
      foreignKey: 'quizId',
      through: 'guest_quizzes'
    });
  };

  return Quiz;
};