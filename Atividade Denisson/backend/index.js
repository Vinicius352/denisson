const { Sequelize, DataTypes } = require('sequelize');
const config = require(__dirname + '/../config/config.json').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importa o modelo Pessoa
db.Pessoa = require('./pessoa')(sequelize, DataTypes);

module.exports = db;
