
import 'dotenv/config';

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: 'postgres',
    host: process.env.DB_HOST || 'localhost'
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres',
    host: process.env.DB_HOST || 'localhost'
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
    }
   }
  }
};
