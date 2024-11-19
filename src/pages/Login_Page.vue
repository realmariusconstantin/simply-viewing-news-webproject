<template>
  <div>
    <Navbar >
<login-form />
    </Navbar>
  <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Organisms/Navbar.vue'
import Footer from '../components/Organisms/Footer.vue'
import LoginForm from "@/components/Molecules/Login_Form.vue";


export default {
  name: 'LoginPage',
  components: {
    LoginForm,
    Footer,
    Navbar,
  },
}
</script>
