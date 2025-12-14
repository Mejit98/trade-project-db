const db = require("../models");
const Payment = db.Payment;

// Создать
exports.create = (req, res) => {
  Payment.create(req.body)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

// Получить все
exports.findAll = (req, res) => {
  Payment.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

// Получить один
exports.findOne = (req, res) => {
  Payment.findByPk(req.params.id)
    .then(data => {
      if (!data) return res.status(404).send({ message: "Не найдено" });
      res.send(data);
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

// Обновить
exports.update = (req, res) => {
  Payment.update(req.body, { where: { id: req.params.id } })
    .then(([updated]) => {
      if (!updated) return res.status(404).send({ message: "Не найдено" });
      res.send({ message: "Обновлено" });
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

// Удалить один
exports.delete = (req, res) => {
  Payment.destroy({ where: { id: req.params.id } })
    .then(deleted => {
      if (!deleted) return res.status(404).send({ message: "Не найдено" });
      res.send({ message: "Удалено" });
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

// Удалить все
exports.deleteAll = (req, res) => {
  Payment.destroy({ where: {} })
    .then(() => res.send({ message: "Все записи удалены" }))
    .catch(err => res.status(500).send({ message: err.message }));
};
