module.exports = app => {
  const genre = require("../controllers/genre.controller.js");
  const router = require("express").Router();

  router.get("/", genre.findAll);
  router.post("/", genre.create);
  router.delete("/", genre.deleteAll);
  router.get("/:id", genre.findOne);
  router.put("/:id", genre.update);
  router.delete("/:id", genre.delete);

  app.use("/api/genres", router);
};
