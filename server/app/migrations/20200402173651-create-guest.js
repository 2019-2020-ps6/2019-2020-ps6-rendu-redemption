module.exports = {
  // Create the guests table.
  up: (queryInterface, Sequelize) => queryInterface.createTable('guests', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    imageId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'images',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
  }),
  // Drop the guests table.
  down: (queryInterface) => queryInterface.dropTable('guests')
};
