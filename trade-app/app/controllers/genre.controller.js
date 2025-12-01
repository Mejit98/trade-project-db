const db = require("../models");
const Genre = db.Genre;

// Создать
exports.create = (req, res) => {
  Genre.create(req.body)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

// Получить все
exports.findAll = (req, res) => {
  Genre.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

// Получить один
exports.findOne = (req, res) => {
  Genre.findByPk(req.params.id)
    .then(data => res.send(data))
    .catch(() => res.status(404).send({ message: "Не найдено" }));
};

// Обновить
exports.update = (req, res) => {
  Genre.update(req.body, { where: { Код_жанра: req.params.id } })
    .then(() => res.send({ message: "Обновлено" }))
    .catch(err => res.status(500).send({ message: err.message }));
};

// Удалить один
exports.delete = (req, res) => {
  Genre.destroy({ where: { Код_жанра: req.params.id } })
    .then(() => res.send({ message: "Удалено" }))
    .catch(err => res.status(500).send({ message: err.message }));
};

// Удалить все
exports.deleteAll = (req, res) => {
  Genre.destroy({ where: {} })
    .then(() => res.send({ message: "Все записи удалены" }))
    .catch(err => res.status(500).send({ message: err.message }));
};
