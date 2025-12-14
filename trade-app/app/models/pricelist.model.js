module.exports = (sequelize, DataTypes) => {
  const Pricelist = sequelize.define("Pricelist", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },           // Код_прайс_листа
    name: { type: DataTypes.STRING(50), allowNull: false },                        // Название
    start_date: { type: DataTypes.DATE, allowNull: false },                         // Дата_начала
    end_date: { type: DataTypes.DATE, allowNull: true }                              // Дата_окончания
  }, {
    tableName: "pricelist",  // оставляем имя таблицы как в оригинале
    timestamps: false
  });

  return Pricelist;
};

