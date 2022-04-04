import bcrypt from 'bcryptjs';
const uuidv4 = require('uuid').v4

export default {
  up: queryInterface => queryInterface.bulkInsert(
    'Users',
    [
      {
        firstname: 'Sylvanus',
        lastname: 'Elendu',
        email: 'chidimma.okafor.c@gmail.com',
        password: bcrypt.hashSync('IamUser', 10),
        userId: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: uuidv4(),
        firstname: 'frank',
        lastname: 'chidinma',
        email: 'stephenibaba@andela.com',
        password: bcrypt.hashSync('Jennylove19', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: uuidv4(),
        firstname: 'frank',
        lastname: 'chidinma',
        email: 'stepbaba@andela.com',
        password: bcrypt.hashSync('Chibyke7&', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {},
  ),
  down: queryInterface => queryInterface.bulkDelete('Users', null, {})
};
