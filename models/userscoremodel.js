module.exports = function(sequelize, DataTypes) {
  // this model will define some base data for the user and is kept seperate for extra protection of user data

  var UserScore = sequelize.define("UserScore", {
    USID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    createdAt: DataTypes.DATE,
    heartRisk: {
      type: DataTypes.DECIMAL,
      validate: {
        len: [0, 1],
        msg: "Number must be between 0 and 1"
      }
    },
    liverRisk: {
      type: DataTypes.DECIMAL,
      validate: {
        len: [0, 1],
        msg: "Number must be between 0 and 1"
      }
    },
    kidneyRisk: {
      type: DataTypes.DECIMAL,
      validate: {
        len: [0, 1],
        msg: "Number must be between 0 and 1"
      }
    },
    diabetesRisk: {
      type: DataTypes.DECIMAL,
      validate: {
        len: [0, 1],
        msg: "Number must be between 0 and 1"
      }
    },
    strokeRisk: {
      type: DataTypes.DECIMAL,
      validate: {
        len: [0, 1],
        msg: "Number must be between 0 and 1"
      }
    },
    healthScore: DataTypes.INTEGER
  });

  return UserScore;
};
