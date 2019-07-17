var faker = require("faker");
var db = require("../models");

function generateUsers() {
  var fakeUserBaseObj = {
    UID: "",
    firstName: "",
    lastName: "",
    zipCode: ""
  };

  var fakeUserLoginObj = {
    userName: "",
    email: "",
    password: "",
    createdAt: ""
  };

  var fakeUserHealthObj = {
    createdAt: "",
    smokeStatus: "",
    drinkPerWeek: "",
    excerciseMinutes: "",
    mood: "",
    weight: "",
    height: "",
    gender: "",
    race: "",
    calories: "",
    BMI: ""
  };

  var fakeUserBase = [];
  var fakeUserLogin = [];
  var fakeUserHealth = [];

  for (var id = 1; id <= 100; id++) {
    // set the values of the user base object
    fakeUserBaseObj.UID = id;
    fakeUserBaseObj.firstName = faker.name.firstName();
    fakeUserBaseObj.lastName = faker.name.lastName();
    fakeUserBaseObj.zipCode = faker.address.zipCode();

    // set the values of the user login object
    fakeUserLoginObj.email = faker.internet.email();
    fakeUserLoginObj.username = faker.internet.userName();
    fakeUserLoginObj.password = faker.internet.password();

    // set the values of the user health object
    fakeUserHealthObj.smokeStatus = faker.random.boolean();
    fakeUserHealthObj.drinkPerWeek = faker.random.number({
      min: 0,
      max: 10
    });
    fakeUserHealthObj.excerciseMinutes = faker.random.number({
      min: 0,
      max: 120
    });
    fakeUserHealthObj.mood = faker.random.number({
      min: 1,
      max: 3
    });
    fakeUserHealthObj.weight = faker.random.number({
      min: 100,
      max: 600
    });
    fakeUserHealthObj.height = faker.random.number({
      min: 150,
      max: 220
    });
    fakeUserHealthObj.gender = faker.random.boolean();
    fakeUserHealthObj.race = faker.random.number({
      min: 1,
      max: 8
    });
    fakeUserHealthObj.calories = faker.random.number({
      min: 500,
      max: 6000
    });
    fakeUserHealthObj.BMI = faker.random.number({
      min: 18,
      max: 60
    });

    fakeUserBaseObj.createdAt = faker.date.recent();
    fakeUserLoginObj.createdAt = faker.date.recent();
    fakeUserHealthObj.createdAt = faker.date.recent();

    fakeUserBase.push(fakeUserBaseObj);

    fakeUserLogin.push(fakeUserLoginObj);

    fakeUserHealth.push(fakeUserHealthObj);

    // db.userBase.create(fakeUserBaseObj).then(function(dbExample) {
    //   res.json(dbExample);
    //   console.log(dbExample);
    // });

    db.UserBase.create(fakeUserBaseObj).then(function(dbExample) {
      res.json(dbExample);
      console.log(dbExample);
    });

    db.UserHealth.create(fakeUserHealthObj).then(function(dbExample) {
      res.json(dbExample);
      console.log(dbExample);
    });

    db.UserLogin.create(fakeUserLoginObj).then(function(dbExample) {
      res.json(dbExample);
      console.log(dbExample);
    });
  }
}

generateUsers();
