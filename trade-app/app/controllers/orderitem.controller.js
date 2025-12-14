const db = require("../models");
const OrderItem = db.OrderItem;

// Создать
exports.create = (req, res) => {
  OrderItem.create(req.body)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

// Получить все
exports.findAll = (req, res) => {
  OrderItem.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

// Получить один
exports.findOne = (req, res) => {
  OrderItem.findOne({
    where: {
      order_id: req.params.id1,
      content_id: req.params.id2
    }
  })
    .then(data => {
      if (!data) return res.status(404).send({ message: "Не найдено" });
      res.send(data);
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

// Обновить
exports.update = (req, res) => {
  OrderItem.update(req.body, {
    where: {
      order_id: req.params.id1,
      content_id: req.params.id2
    }
  })
    .then(([updated]) => {
      if (!updated) return res.status(404).send({ message: "Не найдено" });
      res.send({ message: "Обновлено" });
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

// Удалить один
exports.delete = (req, res) => {
  OrderItem.destroy({
    where: {
      order_id: req.params.id1,
      content_id: req.params.id2
    }
  })
    .then(deleted => {
      if (!deleted) return res.status(404).send({ message: "Не найдено" });
      res.send({ message: "Удалено" });
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

// Удалить все
exports.deleteAll = (req, res) => {
  OrderItem.destroy({ where: {} })
    .then(() => res.send({ message: "Все записи удалены" }))
    .catch(err => res.status(500).send({ message: err.message }));
};
