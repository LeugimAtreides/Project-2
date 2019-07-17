module.exports = function(sequelize, DataTypes) {
  // this model will define some base data for the user and is kept seperate for extra protection of user data

  var UserLogin = sequelize.define("UserLogin", {
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
  return UserLogin;
};
