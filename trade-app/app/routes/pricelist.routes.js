module.exports = app => {
  const pricelists = require("../controllers/pricelist.controller.js");
  const router = require("express").Router();

  router.get("/", pricelists.findAll);
  router.post("/", pricelists.create);
  router.delete("/", pricelists.deleteAll);
  router.get("/:id", pricelists.findOne);
  router.put("/:id", pricelists.update);
  router.delete("/:id", pricelists.delete);

  app.use("/api/pricelists", router);
};
