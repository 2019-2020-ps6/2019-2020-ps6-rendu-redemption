module.exports = {
  up: (queryInterface, Sequelize) => queryInterface
    .bulkInsert('themes', [
      {
        id: 1,
        imageId: 35,
        name: 'Animaux',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {})
    .then(() => queryInterface.sequelize.query('ALTER SEQUENCE "themes_id_seq" RESTART WITH 2')),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('themes', null, {})
};
