module.exports = app => {
  const accesses = require("../controllers/access.controller.js");
  const router = require("express").Router();

  router.get("/", accesses.findAll);
  router.post("/", accesses.create);
  router.delete("/", accesses.deleteAll);
  router.get("/:id", accesses.findOne);
  router.put("/:id", accesses.update);
  router.delete("/:id", accesses.delete);

  app.use("/api/accesses", router);
};
