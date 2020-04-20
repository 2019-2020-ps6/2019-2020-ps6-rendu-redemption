module.exports = (sequelize, DataTypes) => {
  // Define the quiz model.
  const Theme = sequelize.define('Theme', {
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
    tableName: 'themes'
  });

  // Define the theme associations.
  Theme.associate = (models) => {
    // A quiz has one image.
    Theme.belongsTo(models.Image, {
      foreignKey: 'imageId'
    });
  };

  return Theme;
};
