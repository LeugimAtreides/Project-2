$(document).ready(function() {
  // Getting references to our form and input
  // var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var passwordInput1 = $("input#confirmed-password-input");
  // var flag = $('input[name="gender"]:checked').val();
  // var flag = document.getElementsByName('type');
  // var flag = $("input[name=gender]:checked").val();

  // if (passwordInput !== passwordInput1) {
  //   function handleLoginErr(err) {
  //     $("#alert .msg").text(" Please the input  passwords are not the same");
  //     $("#alert").fadeIn(500);
  //   }
     
  // }

  // When the signup button is clicked, we validate the email and password are not blank
  $(".testBtn").on("click", function(event) {
    event.preventDefault();
    var flag = $("input[name=gender]:checked").val()
    console.log(flag);

    if ( passwordInput.val().trim() !== passwordInput1.val().trim()) {
      alert ("Please verify thay both passwords fields have the same value");
      passwordInput.val("");
      passwordInput1.val("");
      return;
    }

    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      flag: flag
    };
    console.log(userData.email, userData.password, userData.flag);

    

    if (!userData.email || !userData.password) {
      alert ("no password or email in user data" );
      return;
    }
   
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password,userData.flag);
    emailInput.val("");
    passwordInput.val("");
    passwordInput1.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password,flag) {
    $.post("/api/signup", {
      email: email,
      password: password,
      flag : flag
    })
      .then(function(data) {
        console.log("This is the value of Flag", data.flag);
        if (data.flag == true) {
        window.location.replace("/userlogin");}
        // If there's an error, handle it by throwing up a bootstrap alert}
        else {
          window.location.replace("/enterpriselogin");
        }
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(" Please you are already registed, go to the login web page");
    $("#alert").fadeIn(500);
  }
});
