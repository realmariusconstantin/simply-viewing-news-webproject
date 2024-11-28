/* eslint-disable */
<template>
  <form class="signup-form">
    <h1>SIGN UP</h1>
    <div class="form-group">
      <input type="text" name="name" placeholder="Name" required>
      <input type="email" name="email" placeholder="Email Address" required>
      <input type="password" name="password" placeholder="Password" required>
      <input type="password" name="confirm-password" placeholder="Confirm Password" required>
    </div>
    <ContinueWhite />
    <p> Already have an account?</p>
    <login-white />
  </form>

</template>

<script>

import {defineComponent} from "vue";
import ContinueWhite from "@/components/atoms/ContinueWhite.vue";
import LoginWhite from "@/components/atoms/LoginWhite.vue";
// import SignIn from "@/components/atoms/SignIn.vue";

export default defineComponent({
  components: {
    LoginWhite,
    // SignIn,
    ContinueWhite
  }
})
</script>

<style >
body {
  background-color: black;
  color: #ffffff;
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
}
.form-group{
  background-color: #000000;
}

.signup-form {
  max-width: 400px;
 height: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #000000;
  outline: 1px solid #ffffff;
  box-shadow: white 0px 0px 10px;
}

.signup-form h1 {
  font-size: 24px;
  letter-spacing: 2px;
  margin-bottom: 20px;
  text-transform: uppercase;
  border-bottom-color: white;
  border-bottom-style: solid;
}

.signup-form .form-group {
  margin-bottom: 20px;
}

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

.signup-form input:focus {
  outline: none;
  border-bottom: 1px solid white;
}


.signup-form p {
  margin-top : 30px;
  margin-bottom: 40px;
  font-size: 14px;
}
</style>
