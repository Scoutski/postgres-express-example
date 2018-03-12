module.exports = {
  development: {
    username: process.env.DB_USER,
    password: null,
    database: 'todo-example',
    host: '127.0.0.1',
    dialect: 'postgres',
    // The below line is added to stop a deprecation warning
    // https://github.com/sequelize/sequelize/issues/8417
    operatorsAliases: false
  },
  test: {
    username: 'postgres',
    password: null,
    database: 'todo-example-test',
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false
  }
};
