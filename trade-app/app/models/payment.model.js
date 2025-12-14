module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define("Payment", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },           // Код_платежа
    order_id: { type: DataTypes.INTEGER, allowNull: false },                        // Код_заказа
    amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },                  // Сумма
    payment_date: { type: DataTypes.DATE, allowNull: false },                       // Дата_платежа
    status: { type: DataTypes.STRING(20), allowNull: false }                        // Статус
  }, {
    tableName: "payment",  
    timestamps: false
  });

  return Payment;
};

