<template>
  <div>
    <Navbar />
    <h1>Admin Dashboard</h1>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Organisms/Navbar.vue'
import Footer from '../components/Organisms/Footer.vue'

export default {
  name: 'AdminPage',
  components: {
    Navbar,
    Footer,
  },
}
</script>
