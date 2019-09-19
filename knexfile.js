module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/shouts.db3',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,//>>>>DATABASE_URL comes from Heroku. Used to connect to Heroku
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};

//connection string using amazon database for right now. May change in 10 minutes
//postgres://yldqmjozrfukwp:aab0296dd3b296feb31d4209c801a83f794fa3522376d3d3fa85697a1143a1c9@ec2-107-20-167-241.compute-1.amazonaws.com:5432/dncfrlra4p6mn