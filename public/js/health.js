
$(function() {
  $("#survey").on("submit", insertSurvey);
  $("#signUp").on("submit", signUp);
  $("#contactUs").on("submit", contactUs);
  $("#login").on("submit", login);
  console.log("is working");

  function insertSurvey(event) {
    event.preventDefault();
    console.log("my form group");
    var newSurvey = {
      smokeStatus: $("#smoke")
        .val()
        .trim(),
      drinkPerWeek: $("#drinks")
        .val()
        .trim(),
      weight: $("#weight")
        .val()
        .trim(),
      dailyCalories: $("#calories")
        .val()
        .trim(),
      exerciseMinutes: $("#exercise")
        .val()
        .trim(),
      mood: $("#mood")
        .val()
        .trim(),
      race: $("#race")
        .val()
        .trim(),
      gender: $("#gender")
        .val()
        .trim(),
      height: $("#height")
        .val()
        .trim()
    };
    console.log(newSurvey);
    $.post("/api/survey", newSurvey);
  }

  function signUp(event) {
    event.preventDefault();
    console.log("sign Up");
    var newUserBase = {
      lastname: $("#lastName")
        .val()
        .trim(),
      firstname: $("#firstName")
        .val()
        .trim(),
      zipcode: $("#zipcode")
        .val()
        .trim()
    };

    var newUserLogin = {
      userName: $("#username")
        .val()
        .trim(),
      email: $("#email")
        .val()
        .trim(),
      password: $("#password")
        .val()
        .trim()
    };

    // send the POST requests

    $.ajax("/api/userbases", {
      type: "POST",
      data: newUserBase
    }).then(function() {
      console.log("new user created!");
    });

    $.ajax("/api/userlogins", {
      type: "POST",
      data: newUserLogin
    }).then(function(data) {
      console.log(data);
      var user = JSON.stringify(data)
      user = user[0].LID;
      console.log("new login data created!");
      getSurvey(user)
    });

  }

  function getSurvey(user) {
    loginId = user || "";
    if (user) {
      userId = "/?LID=" + loginId;
    }
    $.ajax.get("/survey" + loginId, function(res){
      res.render("survey");
    });
  }
  function contactUs(event) {
    event.preventDefault();
    console.log("contact us");
    var contactus = {
      firstname: $("#firstName")
        .val()
        .trim(),
      lastname: $("#lastName")
        .val()
        .trim(),
      email: $("#email")
        .val()
        .trim(),
      message: $("#message")
        .val()
        .trim()
    };
    console.log(contactus);
    $.post("/api/contactus", contactus);
  }

  function login(event) {
    event.preventDefault();
    console.log("login");
    var logan = {
      email: $("#email")
        .val()
        .trim(),
      password: $("#passworD")
        .val()
        .trim()
    };
    console.log(logan);
    $.post("/api/login", logan);
  }
});
