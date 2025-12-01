module.exports = app => {
  const order = require("../controllers/order.controller.js");
  const router = require("express").Router();

  router.get("/", order.findAll);
  router.post("/", order.create);
  router.delete("/", order.deleteAll);
  router.get("/:id", order.findOne);
  router.put("/:id", order.update);
  router.delete("/:id", order.delete);

  app.use("/api/orders", router);
};
