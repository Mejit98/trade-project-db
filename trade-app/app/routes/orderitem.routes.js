module.exports = app => {
  const orderitem = require("../controllers/orderitem.controller.js");
  const router = require("express").Router();

  router.get("/", orderitem.findAll);
  router.post("/", orderitem.create);
  router.delete("/", orderitem.deleteAll);
  router.get("/:id1/:id2", orderitem.findOne);
  router.put("/:id1/:id2", orderitem.update);
  router.delete("/:id1/:id2", orderitem.delete);

  app.use("/api/orderitems", router);
};
