module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define("Content", {
    Код_контента: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    Название: { type: DataTypes.STRING(100), allowNull: false },
    Код_жанра: { type: DataTypes.INTEGER, allowNull: false },
    Описание: { type: DataTypes.STRING(512), allowNull: true },
    Продолжительность: { type: DataTypes.INTEGER, allowNull: true } // в минутах
  }, {
    tableName: "Контент",
    timestamps: false
  });

  return Content;
};
