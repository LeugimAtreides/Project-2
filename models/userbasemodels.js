module.exports = function(sequelize, DataTypes) {
  // this model will define some base data for the user and is kept seperate for extra protection of user data
  var UserBase = sequelize.define("UserBase", {
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
        len: [1]
        // msg: "Last Name field cannot be empty"
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
        // msg: "First Name field cannot be empty"
      }
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [5]
      }
    },
    LoginID: {
      type: DataTypes.INTEGER,
      references: {
        model: "UserLogins",
        key: "LID"
      }
    }
  });
  return UserBase;
};
