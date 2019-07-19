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
      type: DataTypes.DECIMAL(10, 2)
    },
    liverRisk: {
      type: DataTypes.DECIMAL(10, 2)
    },
    kidneyRisk: {
      type: DataTypes.DECIMAL(10, 2)
    },
    diabetesRisk: {
      type: DataTypes.DECIMAL(10, 2)
    },
    strokeRisk: {
      type: DataTypes.DECIMAL(10, 2)
    },
    healthScore: DataTypes.INTEGER,
    LID: {
      type: DataTypes.INTEGER,
      references: {
        model: "UserLogins",
        key: "LID"
      }
    }
  });

  return UserScore;
};
