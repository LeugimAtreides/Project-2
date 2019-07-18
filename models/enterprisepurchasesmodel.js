module.exports = function(sequelize, DataTypes) {
  //this model will define the enterprise data sets with the purpose being to track enterprise identities and track invoice payments

  var EnterprisePurchases = sequelize.define("EnterprisePurchases", {
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
    revenueTotal: DataTypes.DECIMAL
    // foreign key to tie in to the financial ID
    // EID: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "enterpriseLogin",
    //     key: "EID"
    //   }
    // }
  });

  return EnterprisePurchases;
};
