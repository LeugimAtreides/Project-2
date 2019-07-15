module.exports = function(sequelize, DataTypes) {
  //this model will define the enterprise data sets with the purpose being to track enterprise identities and track invoice payments
  var enterpriseLogin = sequelize.define("EnterpriseLogin", {
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
    EnterpriseFID: {
      type: DataTypes.INTEGER,
      references: {
        model: enterpriseInvoice,
        key: "EFID"
      }
    }
  });
  var enterpriseInvoice = sequelize.define("EnterpriseInvoice", {
    //   financial ID
    FID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    createdAt: DataTypes.DATE,
    //   this boolean proves whether they've puchased ad space
    adSpace: DataTypes.BOOLEAN,
    //   this datatype will show which purchase they've made, three choices are available: 1000 a month, 2000, or 3000
    adSpaceChoice: {
      type: DataTypes.STRING,
      validate: {
        isIn: ["Basic", "Intermediate", "Advanced"]
      }
    },
    // next is whether the company has purchased data or not
    dataPurchased: DataTypes.BOOLEAN,
    // data will be sold for every 1000 thousand users
    dataAmount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EnterpriseID: {
      type: DataTypes.INTEGER,
      references: {
        model: enterpriseLogin,
        key: "EID"
      }
    }
  });

  var enterprisePurchases = sequelize.define("EnterprisePurchases", {
    PID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    createdAt: DataTypes.DATE,
    // total payments from this company in ad space bought
    adTotal: DataTypes.DECIMAL,
    // total data revenue from this company in purchased data
    dataTotal: DataTypes.DECIMAL,
    // total revenue from this company
    revenueTotal: DataTypes.DECIMAL,
    // foreign key to tie in to the financial ID
    financeID: {
      type: DataTypes.INTEGER,
      references: {
        model: enterpriseInvoice,
        key: "EFID"
      }
    }
  });

  return enterpriseLogin, enterpriseInvoice, enterprisePurchases;
};
