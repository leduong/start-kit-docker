module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './sqlite.db',
    operatorsAliases: 0,
    logging: false,
  },
  test: {
    dialect: 'sqlite',
    storage: './sqlite.db',
    operatorsAliases: 0,
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    operatorsAliases: 0,
    logging: false,
  },
};
