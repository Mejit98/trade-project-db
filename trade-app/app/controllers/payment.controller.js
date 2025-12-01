const db = require("../models");
const Payment = db.Payment;

exports.create = (req, res) => {
  Payment.create(req.body)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findAll = (req, res) => {
  Payment.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findOne = (req, res) => {
  Payment.findByPk(req.params.id)
    .then(data => res.send(data))
    .catch(() => res.status(404).send({ message: "Не найдено" }));
};

exports.update = (req, res) => {
  Payment.update(req.body, { where: { Номер_платежа: req.params.id } })
    .then(() => res.send({ message: "Обновлено" }))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  Payment.destroy({ where: { Номер_платежа: req.params.id } })
    .then(() => res.send({ message: "Удалено" }))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.deleteAll = (req, res) => {
  Payment.destroy({ where: {} })
    .then(() => res.send({ message: "Все записи удалены" }))
    .catch(err => res.status(500).send({ message: err.message }));
};
