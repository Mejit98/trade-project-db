module.exports = (sequelize, DataTypes) => {
  const Priceitem = sequelize.define("Элемент_прайс-листа", {
    Код_элемента: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    Код_прайс_листа: { type: DataTypes.INTEGER, allowNull: false },
    Код_контента: { type: DataTypes.INTEGER, allowNull: false },
    Цена: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
  }, {
    tableName: "Элемент_прайс-листа",
    timestamps: false
  });

  return Priceitem;
};
