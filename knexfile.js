// Update with your config settings.
require("dotenv").config();

const dbConnection = process.env.DATABASE_URL || "postgres://postgres@localhost:5432/postgres";

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
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: ".data/seeds"
    },
    pool: {
      min: 2, 
      max: 10
    }   
  }


};
