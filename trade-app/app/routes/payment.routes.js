module.exports = app => {
  const payments = require("../controllers/payment.controller.js");
  const router = require("express").Router();

  router.get("/", payments.findAll);
  router.post("/", payments.create);
  router.delete("/", payments.deleteAll);
  router.get("/:id", payments.findOne);
  router.put("/:id", payments.update);
  router.delete("/:id", payments.delete);

  app.use("/api/payments", router);
};
