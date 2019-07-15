module.exports = function(sequelize, DataTypes) {
  // this model will define some base data for the user and is kept seperate for extra protection of user data
  var userBase = sequelize.define("UserBase", {
    UID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    createdAt: DataTypes.DATE,
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
        msg: "Last Name field cannot be empty"
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
        msg: "First Name field cannot be empty"
      }
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [5, 5]
      }
    }
  });

  var userHealth = sequelize.define("UserHealth", {
    UHID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    createdAt: DataTypes.DATE,

    // this will be asked of the user as a selector so no need to validate
    smokeStatus: DataTypes.BOOLEAN,
    drinkPerWeek: DataTypes.INTEGER,
    dailyCalories: DataTypes.INTEGER,
    excerciseMinutes: DataTypes.INTEGER,
    mood: DataTypes.STRING,
    race: DataTypes.STRING,
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

  var userScore = sequelize.define("UserScore", {
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

  var userLogin = sequelize.define("UserLogin", {
    LoginID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    createdAt: DataTypes.DATE,
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
        msg: "User Name field cannot be empty"
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        msg: "Please enter a valid Email Address"
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        passwordValidator: function(password) {
          var strongRegex = new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
          );
          return (
            strongRegex.test(password) ||
            "The password must be eight characters or longer, contain a lowercase letter, an uppercase letter, a number, and at least one special character"
          );
        }
      }
    },
    // ties in to the user base info by referencing the model and the key
    baseID: {
      type: DataTypes.INTEGER,
      references: {
        model: "userBase",
        key: "UID"
      }
    },
    // ties in to the user healh demographic data
    healthID: {
      type: DataTypes.INTEGER,
      references: {
        model: "userHealth",
        key: "UHID"
      }
    },
    // ties into the user health rating score data
    baseID: {
      type: DataTypes.INTEGER,
      references: {
        model: "userScore",
        key: "USID"
      }
    }
  });
  return userBase, userLogin, userHealth, userScore;
};
