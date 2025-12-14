module.exports = app => {
  const content = require("../controllers/content.controller.js");
  const router = require("express").Router();

  router.get("/", content.findAll);
  router.post("/", content.create);
  router.delete("/", content.deleteAll);
  router.get("/:id", content.findOne);
  router.put("/:id", content.update);
  router.delete("/:id", content.delete);

  router.get("/genre/:id", content.getContentsByGenre);           
  router.get("/price/:price", content.getContentsByPrice);        
  router.get("/userorders/:id", content.getUserOrders);           
  router.get("/ordertotal/:id", content.getOrderTotal);          
  router.get("/usersbycontent/:id", content.getUsersByContent);   
  router.get("/top5", content.getTop5Contents);                   
  router.get("/checkaccess/:userId/:contentId", content.checkUserAccess); 

  app.use("/api/contents", router);
};
