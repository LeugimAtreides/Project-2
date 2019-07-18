// 1. grab userscore table to for easy comparison
// Heart Risk
// Liver Risk
// Kidney Risk
// Diabetes Risk
// Stroke Risk
// Total Score

// 2. require the models to make any routing to work
var db = require("../models");

// 3. Build function to generate risk score into corresponding column
// 3.A Generate Heart Risk Score for all users
function generateHeartRisk() {
  //    grab all of the Users who smoke
  db.UserHealth.findAll({}).then(function(res) {
    console.log(res);
  });
}

generateHeartRisk();
