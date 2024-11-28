<template>
  <html lang="en">
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Login Page</title>
  <body>
<div class="login-container">
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

</style>