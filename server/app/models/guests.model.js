module.exports = (sequelize, DataTypes) => {
  // Define the guest model.
  const Guest = sequelize.define(
    'Guest',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true
        }
      }
    },
    {
      // Set the table name.
      tableName: 'guests'
    }
  );

  // Define the guest associations.
  Guest.associate = (models) => {
    // A guest belongs to many quizzes.
    Guest.belongsToMany(models.Quiz, {
      foreignKey: 'guestId',
      through: 'guest_quizzes'
    });
  };

  return Guest;
};
