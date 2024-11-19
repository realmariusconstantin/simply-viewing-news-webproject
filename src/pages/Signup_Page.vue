<template>
  <div>
    <Navbar />
    <SignupForm />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Organisms/Footer.vue'
import SignupForm from '../components/Molecules/Signup_Form.vue'
import Navbar from '../components/Organisms/Navbar.vue'

export default {
  name: 'SignupPage',
  components: {
    Footer,
    SignupForm,
    Navbar,
  },
}
</script>
