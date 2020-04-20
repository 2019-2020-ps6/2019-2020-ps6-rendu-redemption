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
    tableName: 'images'
  });

  // // Define the image associations.
  // Image.associate = (models) => {
  //   // An image belongs to a theme.
  //   Image.belongsTo(models.Theme, {
  //     foreignKey: 'imageId',
  //     onUpdate: 'CASCADE',
  //     onDelete: 'CASCADE'
  //   });
  //
  //   // An image belongs to a quiz.
  //   Image.belongsTo(models.Quiz, {
  //     foreignKey: 'imageId',
  //     onUpdate: 'CASCADE',
  //     onDelete: 'CASCADE'
  //   });
  //
  //   // An image belongs to a question.
  //   Image.belongsTo(models.Question, {
  //     foreignKey: 'imageId',
  //     onUpdate: 'CASCADE',
  //     onDelete: 'CASCADE'
  //   });
  //
  //   // An image belongs to a answer.
  //   Image.belongsTo(models.Answer, {
  //     foreignKey: 'imageId',
  //     onUpdate: 'CASCADE',
  //     onDelete: 'CASCADE'
  //   });
  // };

  return Image;
};
