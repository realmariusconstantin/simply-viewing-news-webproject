<template>
  <!-- Main container for the login form -->
  <form class="login-form">
    <!-- Form title -->
    <h1>LOG IN</h1>
    <!-- Form group containing email and password inputs -->
    <div class="form-group">
      <!-- Email input field -->
      <input type="email" name="email" placeholder="Email Address" required>
      <!-- Password input field -->
      <input type="password" name="password" placeholder="Password" required>
      <!-- Forgot password link -->
      <p class="forgot-password">forgot password?</p>
    </div>

    <!-- Continue button component -->
    <div class="continue">
      <ContinueWhite/>
    </div>
    <!-- Sign up prompt -->
    <p>Don’t have an account?</p>
    <!-- Sign in button component -->
    <div class="sign">
      <SignIn/>
    </div>
  </form>
</template>

<script>
import ContinueWhite from "@/components/atoms/ContinueWhite.vue";
import SignIn from "@/components/atoms/SignIn.vue";

export default {
  name: 'LoginForm',
  components: {
    SignIn,
    ContinueWhite
  }
}
</script>

<style>
/* Style for the body */
body {
  background-color: #000000;
  color: #ffffff;
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
}

/* Style for the login form */
.login-form {
  max-width: 400px;
  height: 500px;
  margin: 50px auto;
  padding: 20px;
  background-color: #000000;
  border: 1px solid #eaeaea;
  text-align: center;
}

/* Style for the form title */
.login-form h1 {
  font-size: 24px;
  letter-spacing: 2px;
  margin-bottom: 20px;
  text-transform: uppercase;
  border-bottom-color: white;
  border-bottom-style: solid;
}

/* Style for the form group */
.login-form .form-group {
  margin-bottom: 20px;
  position: relative;
}

/* Style for the input fields */
.login-form input {
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-bottom: 1px solid #ffffff;
  box-sizing: border-box;
}

/* Style for the input fields when focused */
.login-form input:focus {
  outline: none;
  border-bottom: 1px solid black;
}

/* Style for the paragraph elements */
.login-form p {
  margin: 20px 0 5px;
  font-size: 14px;
}

/* Style for the forgot password link */
.forgot-password {
  top: 75%;
  left: 69%;
  cursor: pointer;
  position: absolute;
  color: #ffffff;
  text-decoration: underline;
}

/* Style for the continue button container */
.continue {
  margin-top: 50px;
}

/* Style for the sign in button container */
.sign {
  margin-top: 50px;
}
</style>