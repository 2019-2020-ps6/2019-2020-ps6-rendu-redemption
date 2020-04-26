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
    },
    {
      id: 4,
      firstName: 'Jaqueline',
      lastName: 'Dubois',
      accessibility: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 5,
      firstName: 'Juliette',
      lastName: 'Després',
      accessibility: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 6,
      firstName: 'Michel',
      lastName: 'Clément',
      accessibility: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 7,
      firstName: 'Pierre',
      lastName: 'Roche',
      accessibility: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 8,
      firstName: 'Antoine',
      lastName: 'Labelle',
      accessibility: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 9,
      firstName: 'Julie',
      lastName: 'Richard',
      accessibility: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 10,
      firstName: 'Marcel',
      lastName: 'Durand',
      accessibility: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 11,
      firstName: 'Nathalie',
      lastName: 'Petit',
      accessibility: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 12,
      firstName: 'Gilles',
      lastName: 'David',
      accessibility: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 13,
      firstName: 'François',
      lastName: 'Muller',
      accessibility: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 14,
      firstName: 'Jean',
      lastName: 'Lefevre',
      accessibility: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 15,
      firstName: 'Yvette',
      lastName: 'Lambert',
      accessibility: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 16,
      firstName: 'Chantal',
      lastName: 'Roux',
      accessibility: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 17,
      firstName: 'Catherine',
      lastName: 'Ségurane',
      accessibility: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 18,
      firstName: 'Didier',
      lastName: 'Morel',
      accessibility: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 19,
      firstName: 'Gilbert',
      lastName: 'Chevalier',
      accessibility: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 20,
      firstName: 'René',
      lastName: 'Martinez',
      accessibility: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('guests', null, {})
};
