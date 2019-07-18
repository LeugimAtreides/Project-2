module.exports = function(sequelize, DataTypes) {
  //this model will define the enterprise data sets with the purpose being to track enterprise identities and track invoice payments

  var EnterpriseLogin = sequelize.define("EnterpriseLogin", {
    // enterprise ID
    EID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    createdAt: DataTypes.DATE,
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
        msg: "Company Name field cannot be empty"
      }
    },
    companyEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        msg: "Please enter a valid Email Adress"
      }
    },
    companyPassword: {
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
    financeID: {
      type: DataTypes.INTEGER,
      references: {
        model: "EnterpriseInvoice",
        key: "FID"
      }
    },
    purchaseID: {
      type: DataTypes.INTEGER,
      references: {
        model: "EnterprisePurchases",
        key: "PID"
      }
    }
  });

  return EnterpriseLogin;
};
