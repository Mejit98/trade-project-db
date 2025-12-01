module.exports = (sequelize, DataTypes) => {
  const Orderitem = sequelize.define("Orderitem", {
    Код_позиции: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    Код_заказа: { type: DataTypes.INTEGER, allowNull: false },
    Код_элемента: { type: DataTypes.INTEGER, allowNull: false },
    Количество: { type: DataTypes.INTEGER, allowNull: false },
    Сумма: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
  }, {
    tableName: "Позиция_заказа",
    timestamps: false
  });

  return Orderitem;
};
