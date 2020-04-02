module.exports = (sequelize, DataTypes) => {
  // Define the answer model.
  const Answer = sequelize.define('Answer', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    orderNb: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    tableName: 'answers'
  });

  // Define the answer order at creation.
  Answer.addHook('beforeCreate', (answer) => new Promise((resolve) => {
    // Set the default order.
    let orderNb = 1;
    Answer
      .max('orderNb', {
        where: {
          questionId: answer.questionId
        }
      })
      .then((max) => {
        // Update the order.
        if (max) orderNb = max + 1;
        answer.setDataValue('orderNb', orderNb);
        resolve(answer);
      });
  }));

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
