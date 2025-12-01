const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'content_db',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Импорт моделей
db.Genre = require('./genre.model.js')(sequelize, Sequelize);
db.Content = require('./content.model.js')(sequelize, Sequelize);
db.PriceList = require('./priceList.model.js')(sequelize, Sequelize);
db.PriceListItem = require('./priceListItem.model.js')(sequelize, Sequelize);
db.User = require('./user.model.js')(sequelize, Sequelize);
db.Order = require('./order.model.js')(sequelize, Sequelize);
db.OrderItem = require('./orderItem.model.js')(sequelize, Sequelize);
db.Payment = require('./payment.model.js')(sequelize, Sequelize);
db.AccessGrant = require('./accessGrant.model.js')(sequelize, Sequelize);

// Определение связей между моделями

// Жанр - Контент (один ко многим)
db.Genre.hasMany(db.Content, { foreignKey: 'genre_id', as: 'contents' });
db.Content.belongsTo(db.Genre, { foreignKey: 'genre_id', as: 'genre' });

// Прайс-лист - Элементы прайс-листа (один ко многим)
db.PriceList.hasMany(db.PriceListItem, { foreignKey: 'price_list_id', as: 'items' });
db.PriceListItem.belongsTo(db.PriceList, { foreignKey: 'price_list_id', as: 'price_list' });

// Контент - Элементы прайс-листа (один ко многим)
db.Content.hasMany(db.PriceListItem, { foreignKey: 'content_id', as: 'price_items' });
db.PriceListItem.belongsTo(db.Content, { foreignKey: 'content_id', as: 'content' });

// Пользователь - Заказы (один ко многим)
db.User.hasMany(db.Order, { foreignKey: 'user_id', as: 'orders' });
db.Order.belongsTo(db.User, { foreignKey: 'user_id', as: 'user' });

// Заказ - Позиции заказа (один ко многим)
db.Order.hasMany(db.OrderItem, { foreignKey: 'order_id', as: 'items' });
db.OrderItem.belongsTo(db.Order, { foreignKey: 'order_id', as: 'order' });

// Заказ - Элемент прайс-листа через OrderItem
db.PriceListItem.hasMany(db.OrderItem, { foreignKey: 'price_list_item_id', as: 'order_items' });
db.OrderItem.belongsTo(db.PriceListItem, { foreignKey: 'price_list_item_id', as: 'price_item' });

// Заказ - Платежи (один ко многим)
db.Order.hasMany(db.Payment, { foreignKey: 'order_id', as: 'payments' });
db.Payment.belongsTo(db.Order, { foreignKey: 'order_id', as: 'order' });

// Пользователь - Выдача доступа (один ко многим)
db.User.hasMany(db.AccessGrant, { foreignKey: 'user_id', as: 'access_grants' });
db.AccessGrant.belongsTo(db.User, { foreignKey: 'user_id', as: 'user' });

// Контент - Выдача доступа (один ко многим)
db.Content.hasMany(db.AccessGrant, { foreignKey: 'content_id', as: 'access_grants' });
db.AccessGrant.belongsTo(db.Content, { foreignKey: 'content_id', as: 'content' });

module.exports = db;