<template>
  <form class="login-form">
    <h1>LOG IN</h1>
    <div class="form-group">
      <input type="email" name="email" placeholder="Email Address" required>
      <input type="password" name="password" placeholder="Password" required>
      <p class="forgot-password">forgot password?</p>
    </div>

    <div class="continue">
      <ContinueWhite/>
    </div>
    <p>Don’t have an account?</p>
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
body {
  background-color: #000000;
  color: #ffffff;
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
}

.login-form {
  max-width: 400px;
  height: 500px;
  margin: 50px auto;
  padding: 20px;
  background-color: #000000;
  border: 1px solid #eaeaea;
  text-align: center;




}
.login-form h1 {
  font-size: 24px;
  letter-spacing: 2px;
  margin-bottom: 20px;
  text-transform: uppercase;
  border-bottom-color: white;
  border-bottom-style: solid;
}

.login-form .form-group {
  margin-bottom: 20px;
  position: relative;
}

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

.login-form input:focus {
  outline: none;
  border-bottom: 1px solid black;
}


.login-form p {
  margin: 20px 0 5px;
  font-size: 14px;
}

.forgot-password {
  top: 75%;
  left: 69%;
  cursor: pointer;
  position: absolute;
  color: #ffffff;
  text-decoration: underline;
}

.continue {
  margin-top: 50px;
}

.sign {
  margin-top: 50px;
}
</style>