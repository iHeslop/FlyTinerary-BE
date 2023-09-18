const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class User extends Model {}

User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      primaryKey: true,
    },
    fname: { type: DataTypes.STRING, allowNull: false, required: true },
    lname: { type: DataTypes.STRING, allowNull: false, required: true },
    email: { type: DataTypes.STRING, allowNull: false, required: true },
    password: { type: DataTypes.STRING, allowNull: false, required: true },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "users",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = User;
