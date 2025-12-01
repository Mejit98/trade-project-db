const { Gentre } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define("Genre", {
    Код_жанра: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    Название: { type: DataTypes.STRING(50), allowNull: false },
    Базовый_код_жанра: { type: DataTypes.INTEGER, allowNull: true },
    Описание: { type: DataTypes.STRING(256), allowNull: true }
  }, {
    tableName: "Жанр",
    timestamps: false
  });

  return Genre;
};
