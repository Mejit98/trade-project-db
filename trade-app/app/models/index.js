const dbConfig = require("../config/db.config.js");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: process.env.DB_PORT || 5432,
  define: {
    underscored: true  
  },
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

// Associations
db.Genre.hasMany(db.Content, { foreignKey: 'genre_id' });
db.Content.belongsTo(db.Genre, { foreignKey: 'genre_id' });

db.PriceList.hasMany(db.PriceItem, { foreignKey: 'price_list_id' });
db.PriceItem.belongsTo(db.PriceList, { foreignKey: 'price_list_id' });

db.Content.hasMany(db.PriceItem, { foreignKey: 'content_id' });
db.PriceItem.belongsTo(db.Content, { foreignKey: 'content_id' });

db.User.hasMany(db.Order, { foreignKey: 'user_id' });
db.Order.belongsTo(db.User, { foreignKey: 'user_id' });

db.Order.hasMany(db.OrderItem, { foreignKey: 'order_id' });
db.OrderItem.belongsTo(db.Order, { foreignKey: 'order_id' });

db.Content.hasMany(db.OrderItem, { foreignKey: 'content_id' });
db.OrderItem.belongsTo(db.Content, { foreignKey: 'content_id' });

db.Order.hasMany(db.Payment, { foreignKey: 'order_id' });
db.Payment.belongsTo(db.Order, { foreignKey: 'order_id' });

db.Order.hasMany(db.Access, { foreignKey: 'order_id' });
db.Access.belongsTo(db.Order, { foreignKey: 'order_id' });

db.Content.hasMany(db.Access, { foreignKey: 'content_id' });
db.Access.belongsTo(db.Content, { foreignKey: 'content_id' });



module.exports = db;