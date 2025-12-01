module.exports = (sequelize, DataTypes) => {
  const Pricelist = sequelize.define("Pricelist", {
    Код_прайс_листа: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    Название: { type: DataTypes.STRING(50), allowNull: false },
    Дата_начала: { type: DataTypes.DATE, allowNull: false },
    Дата_окончания: { type: DataTypes.DATE, allowNull: true }
  }, {
    tableName: "Прайс-лист",
    timestamps: false
  });

  return Pricelist;
};
