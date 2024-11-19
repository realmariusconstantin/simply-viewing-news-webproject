<template>
  <div>
    <Navbar />
    <h1>Welcome to the Home Page</h1>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Organisms/Navbar.vue'
import Footer from '../components/Organisms/Footer.vue'

export default {
  name: 'HomePage',
  components: {
    Navbar,
    Footer,
  },
}
</script>
