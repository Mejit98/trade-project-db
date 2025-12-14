const db = require("../models");
const User = db.User;

// Создать
exports.create = (req, res) => {
  User.create(req.body)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

// Получить все
exports.findAll = (req, res) => {
  User.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

// Получить один
exports.findOne = (req, res) => {
  User.findByPk(req.params.id)
    .then(data => {
      if (!data) return res.status(404).send({ message: "Не найдено" });
      res.send(data);
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

// Обновить
exports.update = (req, res) => {
  User.update(req.body, { where: { id: req.params.id } }) // <-- исправлено на id
    .then(([updated]) => {
      if (!updated) return res.status(404).send({ message: "Не найдено" });
      res.send({ message: "Обновлено" });
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

// Удалить один
exports.delete = (req, res) => {
  User.destroy({ where: { id: req.params.id } }) // <-- исправлено на id
    .then(deleted => {
      if (!deleted) return res.status(404).send({ message: "Не найдено" });
      res.send({ message: "Удалено" });
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

// Удалить все
exports.deleteAll = (req, res) => {
  User.destroy({ where: {} })
    .then(() => res.send({ message: "Все записи удалены" }))
    .catch(err => res.status(500).send({ message: err.message }));
};
