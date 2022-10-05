const path = require('path');
// Update with your config settings.

module.exports = {
  development: {
    client: 'better-sqlite3',
    connection: {
      filename: path.join(__dirname, './database/database.sqlite3')
    },
    migrations: {
      directory: "./database/migrations"
    },
    useNullAsDefault: true,
    pool: {
      min: 1,
      max: 1
    }
  }
};
