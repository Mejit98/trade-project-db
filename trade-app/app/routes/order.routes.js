module.exports = app => {
  const orders = require("../controllers/order.controller.js");
  const router = require("express").Router();

  router.get("/", orders.findAll);
  router.post("/", orders.create);
  router.delete("/", orders.deleteAll);
  router.get("/:id", orders.findOne);
  router.put("/:id", orders.update);
  router.delete("/:id", orders.delete);

  app.use("/api/orders", router);
};
