module.exports = (sequelize, DataTypes) => {
  const Access = sequelize.define("Выдача_доступа", {
    Код_выдачи: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    Код_пользователя: { type: DataTypes.INTEGER, allowNull: false },
    Код_контента: { type: DataTypes.INTEGER, allowNull: false },
    Дата_начала: { type: DataTypes.DATE, allowNull: false },
    Дата_окончания: { type: DataTypes.DATE, allowNull: true }
  }, {
    tableName: "Выдача_доступа",
    timestamps: false
  });

  return Access;
};
