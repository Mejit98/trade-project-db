module.exports = app => {
  const content = require("../controllers/content.controller.js");
  const router = require("express").Router();

  /**
   * @swagger
   * tags:
   *   name: Content
   *   description: API для работы с фильмами интернет-кинотеатра
   */

  /**
   * @swagger
   * /api/contents:
   *   get:
   *     summary: Получить список всех фильмов
   *     tags: [Content]
   *     responses:
   *       200:
   *         description: Список фильмов успешно получен
   */
  router.get("/", content.findAll);

  /**
   * @swagger
   * /api/contents:
   *   post:
   *     summary: Добавить новый фильм
   *     tags: [Content]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *               genre_id:
   *                 type: integer
   *               description:
   *                 type: string
   *     responses:
   *       200:
   *         description: Фильм успешно добавлен
   */
  router.post("/", content.create);

  /**
   * @swagger
   * /api/contents:
   *   delete:
   *     summary: Удалить все фильмы
   *     tags: [Content]
   *     responses:
   *       200:
   *         description: Все фильмы удалены
   */
  router.delete("/", content.deleteAll);

  /**
   * @swagger
   * /api/contents/{id}:
   *   get:
   *     summary: Получить фильм по ID
   *     tags: [Content]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Фильм найден
   *       404:
   *         description: Фильм не найден
   */
  router.get("/:id", content.findOne);

  /**
   * @swagger
   * /api/contents/{id}:
   *   put:
   *     summary: Обновить фильм по ID
   *     tags: [Content]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *     responses:
   *       200:
   *         description: Фильм обновлён
   */
  router.put("/:id", content.update);

  /**
   * @swagger
   * /api/contents/{id}:
   *   delete:
   *     summary: Удалить фильм по ID
   *     tags: [Content]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Фильм удалён
   */
  router.delete("/:id", content.delete);

  /**
   * @swagger
   * /api/contents/genre/{id}:
   *   get:
   *     summary: Получить фильмы по жанру
   *     tags: [Content]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Список фильмов по жанру
   */
  router.get("/genre/:id", content.getContentsByGenre);

  /**
   * @swagger
   * /api/contents/price/{price}:
   *   get:
   *     summary: Получить фильмы дороже заданной цены
   *     tags: [Content]
   *     parameters:
   *       - in: path
   *         name: price
   *         required: true
   *         schema:
   *           type: number
   *     responses:
   *       200:
   *         description: Список фильмов
   */
  router.get("/price/:price", content.getContentsByPrice);

  /**
   * @swagger
   * /api/contents/userorders/{id}:
   *   get:
   *     summary: Получить заказы пользователя
   *     tags: [Content]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Список заказов
   */
  router.get("/userorders/:id", content.getUserOrders);

  /**
   * @swagger
   * /api/contents/ordertotal/{id}:
   *   get:
   *     summary: Получить сумму заказа
   *     tags: [Content]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Сумма заказа
   */
  router.get("/ordertotal/:id", content.getOrderTotal);

  /**
   * @swagger
   * /api/contents/usersbycontent/{id}:
   *   get:
   *     summary: Получить пользователей, купивших фильм
   *     tags: [Content]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Список пользователей
   */
  router.get("/usersbycontent/:id", content.getUsersByContent);

  /**
   * @swagger
   * /api/contents/top5:
   *   get:
   *     summary: Получить ТОП-5 самых продаваемых фильмов
   *     tags: [Content]
   *     responses:
   *       200:
   *         description: Топ фильмов
   */
  router.get("/top5", content.getTop5Contents);

  /**
   * @swagger
   * /api/contents/checkaccess/{userId}/{contentId}:
   *   get:
   *     summary: Проверить доступ пользователя к фильму
   *     tags: [Content]
   *     parameters:
   *       - in: path
   *         name: userId
   *         required: true
   *         schema:
   *           type: integer
   *       - in: path
   *         name: contentId
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Результат проверки доступа
   */
  router.get("/checkaccess/:userId/:contentId", content.checkUserAccess);

  app.use("/api/contents", router);
};
