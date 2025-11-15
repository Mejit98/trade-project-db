const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD
, {
host: dbConfig.HOST,
dialect: dbConfig.dialect,
port: dbConfig.port,
operatorsAliases: false,
pool: {
max: dbConfig.pool.max,
min: dbConfig.pool.min,
acquire: dbConfig.pool.acquire,
idle: dbConfig.pool.idle
}
})
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.janr = require("./janr.model.js")(sequelize, DataTypes);
db.Content = require("./content.model.js")(sequelize, DataTypes);
db.Pricelist = require("./pricelist.model.js")(sequelize, DataTypes);
db.Priceitem = require("./priceitem.model.js")(sequelize, DataTypes);
db.User = require("./user.model.js")(sequelize, DataTypes);
db.Order = require("./order.model.js")(sequelize, DataTypes);
db.Orderitem = require("./orderitem.model.js")(sequelize, DataTypes);
db.Payment = require("./payment.model.js")(sequelize, DataTypes);
db.Access = require("./access.model.js")(sequelize, DataTypes);


db.Genre.hasMany(db.Content, { foreignKey: "Код_жанра" });
db.Content.belongsTo(db.Genre, { foreignKey: "Код_жанра" });


db.Pricelist.hasMany(db.Priceitem, { foreignKey: "Код_прайс_листа" });
db.Priceitem.belongsTo(db.Pricelist, { foreignKey: "Код_прайс_листа" });


db.Content.hasMany(db.Priceitem, { foreignKey: "Код_контента" });
db.Priceitem.belongsTo(db.Content, { foreignKey: "Код_контента" });


db.User.hasMany(db.Order, { foreignKey: "Код_пользователя" });
db.Order.belongsTo(db.User, { foreignKey: "Код_пользователя" });


db.Order.hasMany(db.Orderitem, { foreignKey: "Код_заказа" });
db.Orderitem.belongsTo(db.Order, { foreignKey: "Код_заказа" });


db.Priceitem.hasMany(db.Orderitem, { foreignKey: "Код_элемента" });
db.Orderitem.belongsTo(db.Priceitem, { foreignKey: "Код_элемента" });


db.Order.hasMany(db.Payment, { foreignKey: "Код_заказа" });
db.Payment.belongsTo(db.Order, { foreignKey: "Код_заказа" });


db.User.hasMany(db.Access, { foreignKey: "Код_пользователя" });
db.Access.belongsTo(db.User, { foreignKey: "Код_пользователя" });


db.Content.hasMany(db.Access, { foreignKey: "Код_контента" });
db.Access.belongsTo(db.Content, { foreignKey: "Код_контента" });


module.exports = db;