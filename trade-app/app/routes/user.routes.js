module.exports = app => {
  const users = require("../controllers/user.controller.js");
  const router = require("express").Router();

  router.get("/", users.findAll);
  router.post("/", users.create);
  router.delete("/", users.deleteAll);
  router.get("/:id", users.findOne);
  router.put("/:id", users.update);
  router.delete("/:id", users.delete);

  app.use("/api/users", router);
};
