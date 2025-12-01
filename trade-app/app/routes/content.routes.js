module.exports = app => {
  const content = require("../controllers/content.controller.js");
  const router = require("express").Router();

  router.get("/", content.findAll);
  router.post("/", content.create);
  router.delete("/", content.deleteAll);
  router.get("/:id", content.findOne);
  router.put("/:id", content.update);
  router.delete("/:id", content.delete);

  app.use("/api/contents", router);
};
