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
  app.get("/api/userlogin/:LID", function(req, res) {
    db.UserLogin.findOne({
      where: {
        LID: req.params.LID
      }
    }).then(function(loginData) {
      res.json(loginData);
    });
  });

  //   get user scores
  app.get("/api/userscore/:LID", function(req, res) {
    db.UserScore.findOne({
      where: {
        LID: req.params.LID
      }
    }).then(function(scoreData) {
      res.json(scoreData);
    });
  });
};
