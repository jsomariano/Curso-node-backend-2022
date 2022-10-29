import path from 'path'

export default {
  development: {
    debug: true,
    client: 'better-sqlite3',
    connection: {
      filename: path.resolve('./database/database.sqlite3'),
    },
    migrations: {
      directory: './database/migrations',
    },
    useNullAsDefault: true,
    pool: {
      min: 1,
      max: 1,
    },
  },
};
