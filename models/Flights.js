const { DataTypes, Model } = require("sequelize");
const User = require("./User");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Flight extends Model {}

Flight.init(
  {
    flightId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: User,
        key: "userId",
      },
    },
    currency: { type: DataTypes.STRING, allowNull: false, required: true },
    price: { type: DataTypes.INTEGER, allowNull: false, required: true },
    name: { type: DataTypes.STRING },
    logo: { type: DataTypes.STRING },
    duration: { type: DataTypes.STRING },
    depIata1: { type: DataTypes.STRING, allowNull: false, required: true },
    depTime1: { type: DataTypes.STRING, allowNull: false, required: true },
    depDate1: { type: DataTypes.STRING, allowNull: false, required: true },
    arrIata1: { type: DataTypes.STRING, allowNull: false, required: true },
    arrTime1: { type: DataTypes.STRING, allowNull: false, required: true },
    arrDate1: { type: DataTypes.STRING, allowNull: false, required: true },
    depIata2: { type: DataTypes.STRING },
    depTime2: { type: DataTypes.STRING },
    depDate2: { type: DataTypes.STRING },
    arrIata2: { type: DataTypes.STRING },
    arrTime2: { type: DataTypes.STRING },
    arrDate2: { type: DataTypes.STRING },
    arrIata3: { type: DataTypes.STRING },
    arrTime3: { type: DataTypes.STRING },
    arrDate3: { type: DataTypes.STRING },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "flights",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Flight;
