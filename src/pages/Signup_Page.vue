<template>
  <!-- Main HTML structure for the Signup Page -->
  <html class="Signup-Page" lang="en">
  <head>
    <!-- Meta tags for character set and viewport settings -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <!-- Page title -->
    <title>Signup Page</title>
  </head>
  <body class="Signup-Page">
  <!-- Container for the signup form -->
  <div>
    <!-- Signup form component -->
    <SignupForm />
  </div>
  </body>
  </html>
</template>

<script>
import SignupForm from '../components/Molecules/Signup_Form.vue'

export default {
  name: 'SignupPage',
  components: {
    SignupForm,
  },
}
</script>