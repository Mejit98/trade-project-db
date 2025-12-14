module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },         // Код_заказа
    user_id: { type: DataTypes.INTEGER, allowNull: false },                       // Код_пользователя
    created_at: { type: DataTypes.DATE, allowNull: false },                       // Дата_создания
    status: { type: DataTypes.STRING(20), allowNull: false }                      // Статус
  }, {
    tableName: "order",   // оставляем имя таблицы как в оригинале
    timestamps: false
  });

  return Order;
};
