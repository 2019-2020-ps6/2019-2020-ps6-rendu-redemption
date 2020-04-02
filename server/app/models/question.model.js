module.exports = (sequelize, DataTypes) => {
  // Define the question model.
  const Question = sequelize.define('Question', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    orderNb: {
      type: DataTypes.INTEGER,
      allowNull: true
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

  // Define the question order at creation.
  Question.addHook('beforeCreate', (question) => new Promise((resolve) => {
    // Set the default order.
    let orderNb = 1;
    Question
      .max('orderNb', {
        where: {
          quizId: question.quizId
        }
      })
      .then((max) => {
        // Update the order.
        if (max) orderNb = max + 1;
        question.setDataValue('orderNb', orderNb);
        resolve(question);
      });
  }));

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
