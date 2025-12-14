module.exports = app => {
  const genres = require("../controllers/genre.controller.js");
  const router = require("express").Router();

  router.get("/", genres.findAll);
  router.post("/", genres.create);
  router.delete("/", genres.deleteAll);
  router.get("/:id", genres.findOne);
  router.put("/:id", genres.update);
  router.delete("/:id", genres.delete);

  app.use("/api/genres", router);
};
