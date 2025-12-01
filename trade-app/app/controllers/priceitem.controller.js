const db = require("../models");
const PriceItem = db.PriceItem;

exports.create = (req, res) => {
  PriceItem.create(req.body)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findAll = (req, res) => {
  PriceItem.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findOne = (req, res) => {
  PriceItem.findOne({
    where: {
      Номер_прайс_листа: req.params.id1,
      Код_контента: req.params.id2
    }
  })
    .then(data => res.send(data))
    .catch(() => res.status(404).send({ message: "Не найдено" }));
};

exports.update = (req, res) => {
  PriceItem.update(req.body, {
    where: {
      Номер_прайс_листа: req.params.id1,
      Код_контента: req.params.id2
    }
  })
    .then(() => res.send({ message: "Обновлено" }))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  PriceItem.destroy({
    where: {
      Номер_прайс_листа: req.params.id1,
      Код_контента: req.params.id2
    }
  })
    .then(() => res.send({ message: "Удалено" }))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.deleteAll = (req, res) => {
  PriceItem.destroy({ where: {} })
    .then(() => res.send({ message: "Все записи удалены" }))
    .catch(err => res.status(500).send({ message: err.message }));
};
