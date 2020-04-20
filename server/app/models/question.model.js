module.exports = (sequelize, DataTypes) => {
  // Define the question model.
  const Question = sequelize.define('Question', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    }
  },
  {
    tableName: 'questions'
  });

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

    // A question belongs to an image.
    Question.belongsTo(models.Image, {
      foreignKey: {
        name: 'imageId',
        allowNull: true
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  };

  return Question;
};
