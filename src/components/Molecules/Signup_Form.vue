<template>
  <!-- Signup form container -->
  <form class="signup-form">
    <!-- Signup form title -->
    <h1>SIGN UP</h1>
    <!-- Form group container -->
    <div class="form-group">
      <!-- Name input field -->
      <input type="text" name="name" placeholder="Name" required>
      <!-- Email input field -->
      <input type="email" name="email" placeholder="Email Address" required>
      <!-- Password input field -->
      <input type="password" name="password" placeholder="Password" required>
      <!-- Confirm password input field -->
      <input type="password" name="confirm-password" placeholder="Confirm Password" required>
    </div>
    <!-- Continue button component -->
    <ContinueWhite />
    <!-- Link to login page -->
    <p> Already have an account?</p>
    <login-white />
  </form>
</template>

<script>
import { defineComponent } from "vue";
import ContinueWhite from "@/components/atoms/ContinueWhite.vue";
import LoginWhite from "@/components/atoms/LoginWhite.vue";

export default defineComponent({
  components: {
    LoginWhite,
    ContinueWhite
  }
});
</script>

<style>
/* Body styles */
body {
  background-color: black;
  color: #ffffff;
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
}

/* Form group styles */
.form-group {
  background-color: #000000;
}

/* Signup form container styles */
.signup-form {
  max-width: 400px;
  height: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #000000;
  outline: 1px solid #ffffff;
  box-shadow: white 0px 0px 10px;
}

/* Signup form title styles */
.signup-form h1 {
  font-size: 24px;
  letter-spacing: 2px;
  margin-bottom: 20px;
  text-transform: uppercase;
  border-bottom-color: white;
  border-bottom-style: solid;
}

/* Form group container styles */
.signup-form .form-group {
  margin-bottom: 20px;
}

/* Input field styles */
.signup-form input {
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  background-color: black;
  color: white;
  border: none;
  border-bottom: 1px solid #ffffff;
  box-sizing: border-box;
}

/* Input field focus styles */
.signup-form input:focus {
  outline: none;
  border-bottom: 1px solid white;
}

/* Paragraph styles */
.signup-form p {
  margin-top: 30px;
  margin-bottom: 40px;
  font-size: 14px;
}
</style>