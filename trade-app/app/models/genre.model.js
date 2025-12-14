module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define("Genre", {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true,   // <-- добавляем автоинкремент
      allowNull: false 
    },
    name: { type: DataTypes.STRING(50), allowNull: false }
  }, {
    tableName: "genre",
    timestamps: false
  });

  return Genre;
};
