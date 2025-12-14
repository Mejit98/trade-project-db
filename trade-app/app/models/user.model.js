module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },           // Код_пользователя
    login: { type: DataTypes.STRING(50), allowNull: false },                        // Логин
    password: { type: DataTypes.STRING(256), allowNull: false },                    // Пароль
    email: { type: DataTypes.STRING(100), allowNull: true },                        // Email
    role: { type: DataTypes.STRING(20), allowNull: false }                           // Роль
  }, {
    tableName: "user",  // оставляем имя таблицы как в оригинале
    timestamps: false
  });

  return User;
};
