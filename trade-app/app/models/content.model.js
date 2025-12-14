module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define("Content", {
    id: { type: DataTypes.INTEGER, primaryKey: true,autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING(100), allowNull: false },
    genre_id: { type: DataTypes.INTEGER, allowNull: false },
    description: { type: DataTypes.STRING(512), allowNull: true },
    duration: { type: DataTypes.INTEGER, allowNull: true } // in minutes
  }, {
    tableName: "content",
    timestamps: false
  });
  


  return Content;
};