module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('themes', [
    {
      id: 1,
      imageId: 35,
      name: 'Animaux',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      imageId: 38,
      name: 'Géographie',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      imageId: 64,
      name: 'Musique',
      createdAt: new Date(),
      updatedAt: new Date()
    }],
  {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('themes', null, {})
};