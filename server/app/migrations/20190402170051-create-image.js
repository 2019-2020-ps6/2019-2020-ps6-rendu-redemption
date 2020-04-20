module.exports = {
  // Create the guests table.
  up: (queryInterface, Sequelize) => queryInterface.createTable('images', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    path: {
      type: Sequelize.STRING,
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
  down: (queryInterface) => queryInterface.dropTable('images')
};
