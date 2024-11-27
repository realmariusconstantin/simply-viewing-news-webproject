<template>
    <Navbar_right />
</template>

<script>
import Navbar_right from "@/components/Molecules/navbarContent.vue";

export default {
  name: 'MainNavbar',
  components: {
    Navbar_right,

  }
}
</script>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: #000000;
  }

</style>