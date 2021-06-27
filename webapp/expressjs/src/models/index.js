import Sequelize from 'sequelize';
import database from '../config/database';

const env = process.env.NODE_ENV || 'development';
const config = database[env];
const db = {};
let sequelize;
if (config.url) {
  sequelize = new Sequelize(config.url, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Insert models below
db.Order = require('../apis/order/order.model')(sequelize, Sequelize.DataTypes);
db.Product = require('../apis/product/product.model')(sequelize, Sequelize.DataTypes);
db.Remarketing = require('../apis/remarketing/remarketing.model')(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
