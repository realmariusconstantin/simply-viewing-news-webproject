<template>
  <html lang="en">
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Login Page</title>
  <body>
  <div>
    <Navbar >
<login-form />
    </Navbar>
  <Footer />
  </div>
  </body>
  </html>
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
