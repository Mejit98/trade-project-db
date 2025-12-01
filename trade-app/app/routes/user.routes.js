module.exports = app => {
  const user = require("../controllers/user.controller.js");
  const router = require("express").Router();

  router.get("/", user.findAll);
  router.post("/", user.create);
  router.delete("/", user.deleteAll);
  router.get("/:id", user.findOne);
  router.put("/:id", user.update);
  router.delete("/:id", user.delete);

  app.use("/api/users", router);
};
