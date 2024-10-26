
// ----------------OTP Verification End-----------------
// ----------------Password hide & chow-----------------
    let openeye = document.getElementsByClassName('fa-eye');
    let closeeye = document.getElementsByClassName('fa-eye-slash');
    let pass = document.getElementsByClassName('log-pass');
    function hidepass() {
      pass[0].type = "text";
      openeye[0].style.display = 'none';
      closeeye[0].style.display = 'flex';
      document.getElementById('password').focus();
    }
    function showpass() {
      pass[0].type = "password";
      openeye[0].style.display = 'flex';
      closeeye[0].style.display = 'none';
      document.getElementById('password').focus();
    }
    function hidepass2() {
      pass[1].type = "text";
      openeye[1].style.display = 'none';
      closeeye[1].style.display = 'flex';
      document.getElementById('pass').focus();
    }
    function showpass2() {
      pass[1].type = "password";
      openeye[1].style.display = 'flex';
      closeeye[1].style.display = 'none';
      document.getElementById('pass').focus();
    }
    function hidepass3() {
      pass[2].type = "text";
      openeye[2].style.display = 'none';
      closeeye[2].style.display = 'flex';
      document.getElementById('cpass').focus();
    }
    function showpass3() {
      pass[2].type = "password";
      openeye[2].style.display = 'flex';
      closeeye[2].style.display = 'none';
      document.getElementById('cpass').focus();
    }
    // signup();
    // popuplogin();
    // ----------------Validate Password Characters-----------------
    let error_pass = document.getElementsByClassName('error_pass');
    let signup_btn = document.getElementsByClassName('signup_btn')[0];
    const password = "";
    pass[1].addEventListener('input', function () {
      const password = pass[1].value;

      function isValidPassword(password) {
        const lowerCase = /[a-z]/;
        const upperCase = /[A-Z]/;
        const numbers = /\d/;
        const specialChars = /[!@#$%^&*(),.?":{}|<>]/;

        if (lowerCase.test(password) && upperCase.test(password) && numbers.test(password) && specialChars.test(password)) {
          return true;
        }
        return false;
      }

      if (isValidPassword(password)) {
        error_pass[0].style.display = 'none';
        signup_btn.type = 'submit';
      } else {
        error_pass[0].style.display = 'flex';
        signup_btn.type = 'button';
      }
    });
    pass[2].addEventListener('input', function () {
      if (pass[1].value == pass[2].value) {
        error_pass[1].style.display = 'none';
        signup_btn.type = 'submit';
      } else {
        error_pass[1].style.display = 'flex';
        signup_btn.type = 'button';
      }

    });
