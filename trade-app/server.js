require("dotenv").config();  // <-- импорт dotenv в начале файла

const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();

// CORS
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
//Swager setup
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",   // ОБЯЗАТЕЛЬНО
    info: {
      title: "Internet Cinema API",
      version: "1.0.0",
      description: "API интернет-кинотеатра",
    },
    servers: [
      {
        url: "http://localhost:6868",
      },
    ],
  },
  apis: ["./app/routes/*.js"], // где будем писать описания
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);


// парсеры запросов
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.urlencoded({ extended: true }));

// простой маршрут
app.get("/", (req, res) => {
  res.json({ message: "Welcome to trade-app application." });
});

// синхронизация базы данных
db.sequelize.sync({force: true})
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// порт сервера из переменной окружения
const PORT = process.env.NODE_DOCKER_PORT || 8080;
require("./app/routes/genre.routes.js")(app);
require("./app/routes/content.routes.js")(app);
require("./app/routes/pricelist.routes.js")(app);
require("./app/routes/priceitem.routes.js")(app);
require("./app/routes/user.routes.js")(app);
require("./app/routes/order.routes.js")(app);
require("./app/routes/orderitem.routes.js")(app);
require("./app/routes/payment.routes.js")(app);
require("./app/routes/access.routes.js")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});