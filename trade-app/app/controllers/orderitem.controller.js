const db = require("../models");
const OrderItem = db.OrderItem;

exports.create = (req, res) => {
  OrderItem.create(req.body)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findAll = (req, res) => {
  OrderItem.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findOne = (req, res) => {
  OrderItem.findOne({
    where: {
      Номер_заказа: req.params.id1,
      Код_контента: req.params.id2
    }
  })
    .then(data => res.send(data))
    .catch(() => res.status(404).send({ message: "Не найдено" }));
};

exports.update = (req, res) => {
  OrderItem.update(req.body, {
    where: {
      Номер_заказа: req.params.id1,
      Код_контента: req.params.id2
    }
  })
    .then(() => res.send({ message: "Обновлено" }))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  OrderItem.destroy({
    where: {
      Номер_заказа: req.params.id1,
      Код_контента: req.params.id2
    }
  })
    .then(() => res.send({ message: "Удалено" }))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.deleteAll = (req, res) => {
  OrderItem.destroy({ where: {} })
    .then(() => res.send({ message: "Все записи удалены" }))
    .catch(err => res.status(500).send({ message: err.message }));
};
