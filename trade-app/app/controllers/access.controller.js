const db = require("../models");
const Access = db.Access;

// Создать запись доступа
exports.create = (req, res) => {
  Access.create(req.body)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

// Получить все записи доступа
exports.findAll = (req, res) => {
  Access.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

// Получить одну запись по id
exports.findOne = (req, res) => {
  Access.findByPk(req.params.id)
    .then(data => res.send(data))
    .catch(() => res.status(404).send({ message: "Не найдено" }));
};

// Обновить запись
exports.update = (req, res) => {
  Access.update(req.body, { where: { id: req.params.id } })
    .then(() => res.send({ message: "Обновлено" }))
    .catch(err => res.status(500).send({ message: err.message }));
};

// Удалить запись
exports.delete = (req, res) => {
  Access.destroy({ where: { id: req.params.id } })
    .then(() => res.send({ message: "Удалено" }))
    .catch(err => res.status(500).send({ message: err.message }));
};

// Удалить все записи
exports.deleteAll = (req, res) => {
  Access.destroy({ where: {} })
    .then(() => res.send({ message: "Все записи удалены" }))
    .catch(err => res.status(500).send({ message: err.message }));
};
