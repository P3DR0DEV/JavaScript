const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [{
      nome: 'Pablo',
      email: 'pablolucio@claretiano.edu.br',
      password_hash: await bcrypt.hash('123456789', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Pablo 1',
      email: 'pablolucio1@claretiano.edu.br',
      password_hash: await bcrypt.hash('123456789', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Pablo 2',
      email: 'pablolucio2@claretiano.edu.br',
      password_hash: await bcrypt.hash('123456789', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }], { });
  },

  async down() { },
};
