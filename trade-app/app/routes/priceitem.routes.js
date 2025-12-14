module.exports = app => {
  const priceitems = require("../controllers/priceitem.controller.js");
  const router = require("express").Router();

  router.get("/", priceitems.findAll);
  router.post("/", priceitems.create);
  router.delete("/", priceitems.deleteAll);
  router.get("/:id1/:id2", priceitems.findOne);
  router.put("/:id1/:id2", priceitems.update);
  router.delete("/:id1/:id2", priceitems.delete);

  app.use("/api/priceitems", router);
};
