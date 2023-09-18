const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Airport extends Model {}

Airport.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING, allowNull: false, required: true },
    iata: { type: DataTypes.STRING, allowNull: false, required: true },
    city: { type: DataTypes.STRING },
    lat: { type: DataTypes.FLOAT, allowNull: false },
    lon: { type: DataTypes.FLOAT, allowNull: false },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "airports",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Airport;
