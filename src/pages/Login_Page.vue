<template>
  <!-- Main HTML structure -->
  <html lang="en">
  <!-- Meta tags for character set and viewport settings -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <!-- Page title -->
  <title>Login Page</title>
  <body>
  <!-- Container for the login form -->
  <div class="login-container">
    <!-- Login form component -->
    <login-form />
  </div>
  </body>
  </html>
</template>

<script>
import LoginForm from "@/components/Molecules/Login_Form.vue";

export default {
  name: 'LoginPage',
  components: {
    LoginForm,
  },
}
</script>

<style>
/* Add your styles here */
</style>