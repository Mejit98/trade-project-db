const db = require("../models");
const PriceItem = db.PriceItem;

// Создать
exports.create = (req, res) => {
  PriceItem.create(req.body)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

// Получить все
exports.findAll = (req, res) => {
  PriceItem.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

// Получить один
exports.findOne = (req, res) => {
  PriceItem.findOne({
    where: {
      price_list_id: req.params.id1,
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
  PriceItem.update(req.body, {
    where: {
      price_list_id: req.params.id1,
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
  PriceItem.destroy({
    where: {
      price_list_id: req.params.id1,
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
  PriceItem.destroy({ where: {} })
    .then(() => res.send({ message: "Все записи удалены" }))
    .catch(err => res.status(500).send({ message: err.message }));
};
