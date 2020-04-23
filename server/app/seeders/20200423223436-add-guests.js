module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('guests', [
    {
      id: 1,
      firstName: 'Gérard',
      lastName: 'Martin',
      accessibility: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      firstName: 'Françoise',
      lastName: 'Dupont',
      accessibility: 'TBD',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      firstName: 'Jean-François',
      lastName: 'Deschamps',
      accessibility: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('guests', null, {})
};
