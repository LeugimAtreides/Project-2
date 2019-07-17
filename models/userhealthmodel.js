module.exports = function(sequelize, DataTypes) {
  // this model will define some base data for the user and is kept seperate for extra protection of user data
  var UserHealth = sequelize.define("UserHealth", {
    UHID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    createdAt: DataTypes.DATE,

    // this will be asked of the user as a selector so no need to validate
    smokeStatus: DataTypes.BOOLEAN,
    drinkPerWeek: {
      type: DataTypes.INTEGER,
      validate: {
        len: [0, 10],
        msg: "Choose between 0 and 10 drinks per week"
      }
    },
    dailyCalories: {
      type: DataTypes.INTEGER,
      validate: {
        len: [500, 7000],
        msg: "Choose a valid amount of calories"
      }
    },
    excerciseMinutes: {
      type: DataTypes.INTEGER,
      validate: {
        len: [0, 120],
        msg: "Choose a valid amount of excercise minutes"
      }
    },
    mood: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1, 3],
        msg: "Choose a number between 1-3"
      }
    },
    race: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1, 3],
        msg: "Choose a number between 1-8"
      }
    },
    gender: DataTypes.BOOLEAN,

    // weight will be entered by user and must be converted to kg
    weight: {
      type: DataTypes.DECIMAL,
      validate: {
        len: [1, 1000],
        msg: "Please enter your weight in pounds"
      }
    },

    // height will be part of a selector that includes feet and inches but total must be converted to centimeters
    height: {
      type: DataTypes.DECIMAL,
      validate: {
        len: [0, 1000],
        msg: "invalid height error"
      }
    },
    BMI: DataTypes.DECIMAL
  });

  return UserHealth;
};
