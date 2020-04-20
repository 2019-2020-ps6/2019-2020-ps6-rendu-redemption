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

  // Define the image associations.
  Image.associate = (models) => {
    // // An image belongs to a theme.
    // Image.belongsTo(models.Theme, {
    //   foreignKey: 'imageId',
    //   onUpdate: 'CASCADE',
    //   onDelete: 'CASCADE'
    // });

    // A question has many answers.
    Image.hasMany(models.Quiz, {
      foreignKey: 'imageId'
    });

    // A question has many answers.
    Image.hasMany(models.Answer, {
      foreignKey: 'imageId'
    });

    // A question has many answers.
    Image.hasMany(models.Question, {
      foreignKey: 'imageId'
    });
    //
    // // An image belongs to a answer.
    // Image.belongsTo(models.Answer, {
    //   foreignKey: 'imageId',
    //   onUpdate: 'CASCADE',
    //   onDelete: 'CASCADE'
    // });
  };

  return Image;
};
