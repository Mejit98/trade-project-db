module.exports = (sequelize, DataTypes) => {
  const Orderitem = sequelize.define("Orderitem", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },           // Код_позиции
    order_id: { type: DataTypes.INTEGER, allowNull: false },                        // Код_заказа
    item_id: { type: DataTypes.INTEGER, allowNull: false },                         // Код_элемента
    quantity: { type: DataTypes.INTEGER, allowNull: false },                        // Количество
    total: { type: DataTypes.DECIMAL(10, 2), allowNull: false }                     // Сумма
  }, {
    tableName: "orderitem",  
    timestamps: false
  });

  return Orderitem;
};
