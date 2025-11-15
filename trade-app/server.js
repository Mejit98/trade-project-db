require("dotenv").config();  // <-- импорт dotenv в начале файла

const express = require("express");
const cors = require("cors");
const db = require("./app/models");

const app = express();

// CORS
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

// парсеры запросов
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// простой маршрут
app.get("/", (req, res) => {
  res.json({ message: "Welcome to trade-app application." });
});

// синхронизация базы данных
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// порт сервера из переменной окружения
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

