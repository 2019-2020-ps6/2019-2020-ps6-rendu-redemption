module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('quizzes', [
    {
      id: 1,
      themeId: 1,
      imageId: 36,
      name: 'Mammifères',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      themeId: 1,
      imageId: 37,
      name: 'Oiseaux',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      themeId: 2,
      imageId: 39,
      name: 'Pays d\'Europe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 4,
      themeId: 3,
      imageId: 40,
      name: 'Années 80',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 5,
      themeId: 3,
      imageId: 41,
      name: 'Années 70',
      createdAt: new Date(),
      updatedAt: new Date()
    }],
  {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('quizzes', null, {})
};
