<template>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Home Page</title>
    </head>
    <body>
      <Navbar />
      <h1>Welcome to the Home Page</h1>
    </body>
  </html>
</template>

<script>
import Navbar from '../components/Organisms/Navbar.vue'
//import Footer from '../components/Organisms/Footer.vue'

export default {
  name: 'HomePage',
  components: {
    Navbar,
    //Footer,
  },
}
</script>
<style>
</style>
