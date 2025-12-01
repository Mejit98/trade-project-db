module.exports = app => {
  const access = require("../controllers/access.controller.js");
  const router = require("express").Router();

  router.get("/", access.findAll);
  router.post("/", access.create);
  router.delete("/", access.deleteAll);
  router.get("/:id", access.findOne);
  router.put("/:id", access.update);
  router.delete("/:id", access.delete);

  app.use("/api/accesses", router);
};
