module.exports = app => {
  const pricelist = require("../controllers/pricelist.controller.js");
  const router = require("express").Router();

  router.get("/", pricelist.findAll);
  router.post("/", pricelist.create);
  router.delete("/", pricelist.deleteAll);
  router.get("/:id", pricelist.findOne);
  router.put("/:id", pricelist.update);
  router.delete("/:id", pricelist.delete);

  app.use("/api/pricelists", router);
};
