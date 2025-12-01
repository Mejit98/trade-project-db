module.exports = app => {
  const priceitem = require("../controllers/priceitem.controller.js");
  const router = require("express").Router();

  router.get("/", priceitem.findAll);
  router.post("/", priceitem.create);
  router.delete("/", priceitem.deleteAll);
  router.get("/:id1/:id2", priceitem.findOne);
  router.put("/:id1/:id2", priceitem.update);
  router.delete("/:id1/:id2", priceitem.delete);

  app.use("/api/priceitems", router);
};
