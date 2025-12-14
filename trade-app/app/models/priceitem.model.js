module.exports = (sequelize, DataTypes) => {
  const Priceitem = sequelize.define("Priceitem", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },           // Код_элемента
    price_list_id: { type: DataTypes.INTEGER, allowNull: false },                  // Код_прайс_листа
    content_id: { type: DataTypes.INTEGER, allowNull: false },                     // Код_контента
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false }                    // Цена
  }, {
    tableName: "priceitem",  // оставляем имя таблицы как в оригинале
    timestamps: false
  });

  return Priceitem;
};
