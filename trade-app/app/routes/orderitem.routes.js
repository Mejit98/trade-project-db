module.exports = app => {
  const orderitems = require("../controllers/orderitem.controller.js");
  const router = require("express").Router();

  router.get("/", orderitems.findAll);
  router.post("/", orderitems.create);
  router.delete("/", orderitems.deleteAll);
  router.get("/:id1/:id2", orderitems.findOne);
  router.put("/:id1/:id2", orderitems.update);
  router.delete("/:id1/:id2", orderitems.delete);

  app.use("/api/orderitems", router);
};
