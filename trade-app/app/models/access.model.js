module.exports = (sequelize, DataTypes) => {
  const Access = sequelize.define("Access", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },          // Код_выдачи
    user_id: { type: DataTypes.INTEGER, allowNull: false },                        // Код_пользователя
    content_id: { type: DataTypes.INTEGER, allowNull: false },                     // Код_контента
    start_date: { type: DataTypes.DATE, allowNull: false },                        // Дата_начала
    end_date: { type: DataTypes.DATE, allowNull: true }                             // Дата_окончания
  }, {
    tableName: "access",   // имя таблицы в базе после переименования
    timestamps: false
  });

  return Access;
};
