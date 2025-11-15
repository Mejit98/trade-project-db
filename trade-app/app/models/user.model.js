module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("Пользователь", {
    Код_пользователя: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    Логин: { type: DataTypes.STRING(50), allowNull: false },
    Пароль: { type: DataTypes.STRING(256), allowNull: false },
    Email: { type: DataTypes.STRING(100), allowNull: true },
    Роль: { type: DataTypes.STRING(20), allowNull: false }
  }, {
    tableName: "Пользователь",
    timestamps: false
  });

  return User;
};
