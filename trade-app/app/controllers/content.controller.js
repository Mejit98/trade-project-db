const db = require("../models");
const Content = db.Content;
const Genre = db.Genre;
const Order = db.Order;
const OrderItem = db.OrderItem;
const User = db.User;

// ------------------ CRUD ------------------
exports.create = (req, res) => {
  Content.create(req.body)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findAll = (req, res) => {
  Content.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findOne = (req, res) => {
  Content.findByPk(req.params.id)
    .then(data => res.send(data))
    .catch(() => res.status(404).send({ message: "Не найдено" }));
};

exports.update = (req, res) => {
  Content.update(req.body, { where: { id: req.params.id } })
    .then(() => res.send({ message: "Обновлено" }))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  Content.destroy({ where: { id: req.params.id } })
    .then(() => res.send({ message: "Удалено" }))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.deleteAll = (req, res) => {
  Content.destroy({ where: {} })
    .then(() => res.send({ message: "Все записи удалены" }))
    .catch(err => res.status(500).send({ message: err.message }));
};

// ------------------ Raw queries для ЛР12 ------------------

// 1. Получить все фильмы по жанру
exports.getContentsByGenre = async (req, res) => {
  const genreId = req.params.id;
  try {
    const result = await db.sequelize.query(
      'SELECT * FROM "content" WHERE "genre_id" = :genreId',
      { replacements: { genreId }, type: db.Sequelize.QueryTypes.SELECT }
    );
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// 2. Фильмы дороже указанной цены
exports.getContentsByPrice = async (req, res) => {
  const price = req.params.price;
  try {
    const result = await db.sequelize.query(
      `SELECT c.* 
       FROM "content" c 
       JOIN "priceitem" p ON c.id = p.content_id 
       WHERE p.price > :price`,
      { replacements: { price }, type: db.Sequelize.QueryTypes.SELECT }
    );
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// 3. Заказы пользователя
exports.getUserOrders = async (req, res) => {
  const userId = req.params.id;
  try {
    const result = await db.sequelize.query(
      'SELECT * FROM "order" WHERE "user_id" = :userId',
      { replacements: { userId }, type: db.Sequelize.QueryTypes.SELECT }
    );
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// 4. Общая сумма заказа
exports.getOrderTotal = async (req, res) => {
  const orderId = req.params.id;
  try {
    const result = await db.sequelize.query(
      'SELECT SUM(quantity * price) AS total FROM "orderitem" WHERE "order_id" = :orderId',
      { replacements: { orderId }, type: db.Sequelize.QueryTypes.SELECT }
    );
    res.send(result[0]);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// 5. Пользователи, купившие фильм
exports.getUsersByContent = async (req, res) => {
  const contentId = req.params.id;
  try {
    const result = await db.sequelize.query(
      `SELECT u.* 
       FROM "user" u 
       JOIN "order" o ON u.id = o.user_id 
       JOIN "orderitem" oi ON o.id = oi.order_id 
       WHERE oi.content_id = :contentId`,
      { replacements: { contentId }, type: db.Sequelize.QueryTypes.SELECT }
    );
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// 6. Топ-5 фильмов по продажам
exports.getTop5Contents = async (req, res) => {
  try {
    const result = await db.sequelize.query(
      `SELECT c.name, COUNT(*) AS sold 
       FROM "orderitem" oi 
       JOIN "content" c ON oi.content_id = c.id 
       GROUP BY c.name 
       ORDER BY sold DESC 
       LIMIT 5`,
      { type: db.Sequelize.QueryTypes.SELECT }
    );
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// 7. Проверка доступа пользователя к фильму
exports.checkUserAccess = async (req, res) => {
  const { userId, contentId } = req.params;
  try {
    const result = await db.sequelize.query(
      'SELECT * FROM "access" WHERE "user_id" = :userId AND "content_id" = :contentId',
      { replacements: { userId, contentId }, type: db.Sequelize.QueryTypes.SELECT }
    );
    res.send(result[0] || { access: false });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
