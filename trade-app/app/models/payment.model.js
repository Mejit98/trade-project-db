module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define("Payment", {
    Код_платежа: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    Код_заказа: { type: DataTypes.INTEGER, allowNull: false },
    Сумма: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    Дата_платежа: { type: DataTypes.DATE, allowNull: false },
    Статус: { type: DataTypes.STRING(20), allowNull: false }
  }, {
    tableName: "Платёж",
    timestamps: false
  });

  return Payment;
};
