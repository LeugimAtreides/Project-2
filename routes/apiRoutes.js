var db = require("../models");

module.exports = function(app) {
  // Get User Health Data
  app.get("/api/userhealth/:LID", function(req, res) {
    db.UserHealth.findOne({
      where: {
        LID: req.params.LID
      },
      include: [
        {
          model: UserHealh
        }
      ]
    }).then(function(healthData) {
      res.json(healthData);
    });
  });

  // Get user base data
  app.get("/api/userbase/:LID", function(req, res) {
    db.UserBase.findOne({
      where: {
        LID: req.params.LID
      },
      include: [
        {
          model: UserBase
        }
      ]
    }).then(function(baseData) {
      res.json(baseData);
    });
  });

  //   get user login data
  app.get("/api/userlogins/:LID", function(req, res) {
    db.UserLogin.findOne({
      where: {
        LID: req.params.LID
      }
    }).then(function(loginData) {
      res.json(loginData);
    });
  });

  //   get user scores
  app.get("/api/userscores/:LID", function(req, res) {
    db.UserScore.findOne({
      where: {
        LID: req.params.LID
      }
    }).then(function(scoreData) {
      res.json(scoreData);
    });
  });

  app.post("/api/userhealths", function(req, res) {
    db.UserHealth.create({
      smokeStatus: req.body.smoke,
      drinkPerWeek: req.body.drinks,
      weight: req.body.weight,
      dailyCalories: req.body.calories,
      exerciseMinutes: req.body.exercise,
      mood: req.body.mood,
      race: req.body.race,
      gender: req.body.gender,
      height: req.body.height
    }).then(function(fjdk) {
      res.json(fjdk);
    });
  });
};

app.post("/api/userbases", function(req, res) {
  db.UserBase.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    zipCode: req.body.zipCode
  }).then(function(result) {
    console.log("User Data Created!: ", result);
    res.json(result);
  });
});

app.post("/api/userlogins", function(req, res) {
  db.UserLogin.create({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password
  }).then(function(result) {
    res.json(result);
    console.log("User Data created, ", result);
  });
});
