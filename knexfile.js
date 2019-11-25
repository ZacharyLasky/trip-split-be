module.exports = {
  // development: {
  //   client: "sqlite3",
  //   useNullAsDefault: true,
  //   connection: {
  //     filename: "./database/ts.db3"
  //   },
  //   pool: {
  //     afterCreate: (conn, done) => {
  //       // runs after a connection is made to the sqlite engine
  //       conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
  //     }
  //   },
  //   migrations: {
  //     directory: "./database/migrations",
  //     tableName: "knex_migrations"
  //   },
  //   seeds: {
  //     directory: "./database/seeds"
  //   }
  // },

  development: {
    client: "postgresql",
    useNullAsDefault: true,
    connection: process.env.DB_LOCAL_URL || {
      database: process.env.DB_LOCAL,
      user: process.env.DB_LOCAL_USER,
      password: process.env.DB_LOCAL_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },

  production: {
    client: "postgresql",
    useNullAsDefault: true,
    connection: process.env.DB_LOCAL_URL || {
      database: process.env.DB,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }
};
