// Update with your config settings.
const dbConnection = "from heroku"

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/data.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: ".data/seeds"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done)
      }
    }    
  },
  production: {
    client: 'pg',
    connection: dbConnection,
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: ".data/seeds"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done)
      }
    }    
  }


};
