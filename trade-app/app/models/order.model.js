module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    Код_заказа: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    Код_пользователя: { type: DataTypes.INTEGER, allowNull: false },
    Дата_создания: { type: DataTypes.DATE, allowNull: false },
    Статус: { type: DataTypes.STRING(20), allowNull: false }
  }, {
    tableName: "Заказ",
    timestamps: false
  });

  return Order;
};
