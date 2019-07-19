// 1. grab userscore table to for easy comparison
// Heart Risk
// Liver Risk
// Kidney Risk
// Diabetes Risk
// Stroke Risk
// Total Score

// 2. require the models to make any routing to work
var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "",
  database: "salutaris_dev_db"
});

connection.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log("connected as id " + connection.threadId + "\n");
});

// 3. Build function to generate risk score into corresponding column
// 3.a. Generate Heart Risk Score for all users
function generateHeartRisk() {
  //    grab all of the users who smoke
  connection.query(
    "SELECT UHID FROM userhealths WHERE smokeStatus = 1",
    function(err, res) {
      if (err) {
        throw err;
      }
      var smokerID = res;
      for (var i = 0; i < smokerID.length; i++) {
        console.log(smokerID[i].UHID);
        connection.query(
          "UPDATE userscores SET heartRisk = .44 WHERE USID = ? ",
          [smokerID[i].UHID]
        );
      }
    }
  );
  // // run through all of the non-smokers and assess risk of having CHD
  connection.query(
    "SELECT UHID FROM userhealths WHERE smokeStatus = 0",
    function(err, res) {
      if (err) {
        throw err;
      }
      var smokerID = res;
      for (var i = 0; i < smokerID.length; i++) {
        console.log(smokerID[i].UHID);
        connection.query(
          "UPDATE userscores SET heartRisk = .10 WHERE USID = ? ",
          [smokerID[i].UHID]
        );
      }
    }
  );
}

function generateLiverRisk() {
  connection.query(
    "SELECT UHID FROM userhealths WHERE smokeStatus = 1",
    function(err, res) {
      if (err) {
        throw err;
      }
      var smokerID = res;
      for (var i = 0; i < smokerID.length; i++) {
        console.log(smokerID[i].UHID);
        connection.query(
          "UPDATE userscores SET liverRisk = .21 WHERE USID = ? ",
          [smokerID[i].UHID]
        );
      }
    }
  );
  connection.query(
    "SELECT UHID FROM userhealths WHERE smokeStatus = 0",
    function(err, res) {
      if (err) {
        throw err;
      }
      var smokerID = res;
      for (var i = 0; i < smokerID.length; i++) {
        console.log(smokerID[i].UHID);
        connection.query(
          "UPDATE userscores SET liverRisk = .05 WHERE USID = ? ",
          [smokerID[i].UHID]
        );
      }
    }
  );
}

function generateKidneyRisk() {
  connection.query(
    "SELECT UHID FROM userhealths WHERE smokeStatus = 1",
    function(err, res) {
      if (err) {
        throw err;
      }
      var smokerID = res;
      for (var i = 0; i < smokerID.length; i++) {
        console.log(smokerID[i].UHID);
        connection.query(
          "UPDATE userscores SET kidneyRisk = .30 WHERE USID = ? ",
          [smokerID[i].UHID]
        );
      }
    }
  );
  connection.query(
    "SELECT UHID FROM userhealths WHERE smokeStatus = 0",
    function(err, res) {
      if (err) {
        throw err;
      }
      var smokerID = res;
      for (var i = 0; i < smokerID.length; i++) {
        console.log(smokerID[i].UHID);
        connection.query(
          "UPDATE userscores SET kidneyRisk = .04 WHERE USID = ? ",
          [smokerID[i].UHID]
        );
      }
    }
  );
}

function generateDiabetesRisk() {
  connection.query(
    "SELECT UHID FROM userhealths WHERE smokeStatus = 1",
    function(err, res) {
      if (err) {
        throw err;
      }
      var smokerID = res;
      for (var i = 0; i < smokerID.length; i++) {
        console.log(smokerID[i].UHID);
        connection.query(
          "UPDATE userscores SET diabetesRisk = 3.21 WHERE USID = ? ",
          [smokerID[i].UHID]
        );
      }
    }
  );
  connection.query(
    "SELECT UHID FROM userhealths WHERE smokeStatus = 0",
    function(err, res) {
      if (err) {
        throw err;
      }
      var smokerID = res;
      for (var i = 0; i < smokerID.length; i++) {
        console.log(smokerID[i].UHID);
        connection.query(
          "UPDATE userscores SET diabetesRisk = .95 WHERE USID = ? ",
          [smokerID[i].UHID]
        );
      }
    }
  );
}

function generateStrokeRisk() {
  connection.query(
    "SELECT UHID FROM userhealths WHERE smokeStatus = 1",
    function(err, res) {
      if (err) {
        throw err;
      }
      var smokerID = res;
      for (var i = 0; i < smokerID.length; i++) {
        console.log(smokerID[i].UHID);
        connection.query(
          "UPDATE userscores SET strokeRisk = .43 WHERE USID = ? ",
          [smokerID[i].UHID]
        );
      }
    }
  );
  connection.query(
    "SELECT UHID FROM userhealths WHERE smokeStatus = 0",
    function(err, res) {
      if (err) {
        throw err;
      }
      var smokerID = res;
      for (var i = 0; i < smokerID.length; i++) {
        console.log(smokerID[i].UHID);
        connection.query(
          "UPDATE userscores SET strokeRisk = .06 WHERE USID = ? ",
          [smokerID[i].UHID]
        );
      }
    }
  );
}
function generateUserHealthScore() {
  connection.query(
    "SELECT UHID FROM userhealths WHERE smokeStatus = 1",
    function(err, res) {
      if (err) {
        throw err;
      }
      var smokerID = res;
      for (var i = 0; i < smokerID.length; i++) {
        console.log(smokerID[i].UHID);
        connection.query(
          "UPDATE userscores SET healthScore = 322 WHERE USID = ? ",
          [smokerID[i].UHID]
        );
      }
    }
  );
  connection.query(
    "SELECT UHID FROM userhealths WHERE smokeStatus = 0",
    function(err, res) {
      if (err) {
        throw err;
      }
      var smokerID = res;
      for (var i = 0; i < smokerID.length; i++) {
        console.log(smokerID[i].UHID);
        connection.query(
          "UPDATE userscores SET healthScore = 760 WHERE USID = ? ",
          [smokerID[i].UHID]
        );
      }
    }
  );
}
function generateLID() {
  connection.query("SELECT UHID FROM userhealths", function(err, res) {
    if (err) {
      throw err;
    }
    var smokerID = res;
    for (var i = 0; i < smokerID.length; i++) {
      console.log(smokerID[i].UHID);
      connection.query("UPDATE userscores SET lid = ? WHERE USID = ? ", [
        smokerID[i].UHID,
        smokerID[i].UHID
      ]);
    }
  });
}
generateLID();
generateUserHealthScore();
generateStrokeRisk();
generateDiabetesRisk();
generateKidneyRisk();
generateLiverRisk();
generateHeartRisk();
