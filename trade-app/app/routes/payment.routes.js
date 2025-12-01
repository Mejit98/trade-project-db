module.exports = app => {
  const payment = require("../controllers/payment.controller.js");
  const router = require("express").Router();

  router.get("/", payment.findAll);
  router.post("/", payment.create);
  router.delete("/", payment.deleteAll);
  router.get("/:id", payment.findOne);
  router.put("/:id", payment.update);
  router.delete("/:id", payment.delete);

  app.use("/api/payments", router);
};
