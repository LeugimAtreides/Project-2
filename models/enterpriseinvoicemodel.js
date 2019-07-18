module.exports = function(sequelize, DataTypes) {
  //this model will define the enterprise data sets with the purpose being to track enterprise identities and track invoice payments

  var EnterpriseInvoice = sequelize.define("EnterpriseInvoice", {
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
    }
    // EID: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "enterpriseLogin",
    //     key: "EID"
    //   }
    // }
  });

  return EnterpriseInvoice;
};
