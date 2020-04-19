module.exports = (sequelize, DataTypes) => {
  // Define the guest model.
  const Image = sequelize.define('Image', {
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
    },
    path: {

      type: DataTypes.STRING,
      allowNull: false,
      validate: {

        notNull: true,
        notEmpty: true

      }

    }
  },
  {
    tableName: 'image'
  });

  // Define the image associations.
  Image.associate = (models) => {
    // An image belongs to a theme.
    Image.belongsTo(models.Theme, {
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    // An image belongs to a quiz.
    Image.belongsTo(models.Quiz, {
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    // An image belongs to a question.
    Image.belongsTo(models.Question, {
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    // An image belongs to a answer.
    Image.belongsTo(models.Answer, {
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  };

  return Image;
};
