const dbConfig = require("../config/db.config.js");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: process.env.DB_PORT || 5432,
  pool: dbConfig.pool
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// импорт моделей
db.Genre = require("./genre.model.js")(sequelize, DataTypes);
db.Content = require("./content.model.js")(sequelize, DataTypes);
db.PriceList = require("./pricelist.model.js")(sequelize, DataTypes);
db.PriceItem = require("./priceitem.model.js")(sequelize, DataTypes);
db.User = require("./user.model.js")(sequelize, DataTypes);
db.Order = require("./order.model.js")(sequelize, DataTypes);
db.OrderItem = require("./orderitem.model.js")(sequelize, DataTypes);
db.Payment = require("./payment.model.js")(sequelize, DataTypes);
db.Access = require("./access.model.js")(sequelize, DataTypes);


db.Genre.hasMany(db.Content, { foreignKey: 'Код_жанра' });
db.Content.belongsTo(db.Genre, { foreignKey: 'Код_жанра' });

db.PriceList.hasMany(db.PriceItem, { foreignKey: 'Номер_прайс_листа' });
db.PriceItem.belongsTo(db.PriceList, { foreignKey: 'Номер_прайс_листа' });

db.Content.hasMany(db.PriceItem, { foreignKey: 'Код_контента' });
db.PriceItem.belongsTo(db.Content, { foreignKey: 'Код_контента' });


db.User.hasMany(db.Order, { foreignKey: 'Код_пользователя' });
db.Order.belongsTo(db.User, { foreignKey: 'Код_пользователя' });


db.Order.hasMany(db.OrderItem, { foreignKey: 'Номер_заказа' });
db.OrderItem.belongsTo(db.Order, { foreignKey: 'Номер_заказа' });


db.Content.hasMany(db.OrderItem, { foreignKey: 'Код_контента' });
db.OrderItem.belongsTo(db.Content, { foreignKey: 'Код_контента' });


db.Order.hasMany(db.Payment, { foreignKey: 'Номер_заказа' });
db.Payment.belongsTo(db.Order, { foreignKey: 'Номер_заказа' });


db.Order.hasMany(db.Access, { foreignKey: 'Номер_заказа' });
db.Content.hasMany(db.Access, { foreignKey: 'Код_контента' });

module.exports = db;
