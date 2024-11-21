<template>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Signup Page</title>
  </head>
  <body>
  <div>
    <SignupForm />

  </div>
  </body>


  </html>
</template>

<script>

import SignupForm from '../components/Molecules/Signup_Form.vue'
// import Navbar from '../components/Organisms/Navbar.vue'

export default {
  name: 'SignupPage',
  components: {
    SignupForm,
    // Navbar,
  },
}
</script>

<style>


</style>