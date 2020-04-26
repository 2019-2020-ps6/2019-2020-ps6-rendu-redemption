module.exports = {
  up: (queryInterface, Sequelize) => queryInterface
    .bulkInsert('guests', [
      {
        id: 1,
        firstName: 'Gérard',
        lastName: 'Martin',
        accessibility: 'none',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        firstName: 'Françoise',
        lastName: 'Dupont',
        accessibility: 'tbd1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        firstName: 'Jean-François',
        lastName: 'Deschamps',
        accessibility: 'none',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        firstName: 'Jaqueline',
        lastName: 'Dubois',
        accessibility: 'none',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        firstName: 'Juliette',
        lastName: 'Després',
        accessibility: 'none',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        firstName: 'Michel',
        lastName: 'Clément',
        accessibility: 'none',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        firstName: 'Pierre',
        lastName: 'Roche',
        accessibility: 'none',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        firstName: 'Antoine',
        lastName: 'Labelle',
        accessibility: 'none',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        firstName: 'Julie',
        lastName: 'Richard',
        accessibility: 'none',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        firstName: 'Marcel',
        lastName: 'Durand',
        accessibility: 'none',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        firstName: 'Nathalie',
        lastName: 'Petit',
        accessibility: 'none',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        firstName: 'Gilles',
        lastName: 'David',
        accessibility: 'none',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        firstName: 'François',
        lastName: 'Muller',
        accessibility: 'none',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        firstName: 'Jean',
        lastName: 'Lefevre',
        accessibility: 'none',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        firstName: 'Yvette',
        lastName: 'Lambert',
        accessibility: 'none',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        firstName: 'Chantal',
        lastName: 'Roux',
        accessibility: 'none',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17,
        firstName: 'Catherine',
        lastName: 'Ségurane',
        accessibility: 'none',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18,
        firstName: 'Didier',
        lastName: 'Morel',
        accessibility: 'none',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 19,
        firstName: 'Gilbert',
        lastName: 'Chevalier',
        accessibility: 'none',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 20,
        firstName: 'René',
        lastName: 'Martinez',
        accessibility: 'none',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {})
    .then(() => queryInterface.sequelize.query('ALTER SEQUENCE "guests_id_seq" RESTART WITH 21')),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('guests', null, {})
};
