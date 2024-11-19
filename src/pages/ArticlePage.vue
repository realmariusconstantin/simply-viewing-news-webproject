<template>
  <div>
    <Navbar />
    <h1>Articles Page</h1>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Organisms/Navbar.vue'
import Footer from '../components/Organisms/Footer.vue'

export default {
  name: 'ArticlePage',
  components: {
    Navbar,
    Footer,
  },
}
</script>
