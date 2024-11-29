<template>
  <!-- Navigation bar container -->
  <nav>
    <!-- Menu icon component -->
    <MenuWhite/>
    <!-- Logo icon component -->
    <LogoIcon/>
    <!-- Sign in button component -->
    <SignIn/>
  </nav>
</template>

<script>
import MenuWhite from "@/components/atoms/MenuWhite.vue";
import LogoIcon from "@/components/atoms/LogoIcon.vue";
import SignIn from "@/components/atoms/SignIn.vue";

export default {
  components: {
    MenuWhite,
    LogoIcon,
    SignIn,
  },
};
</script>

<style>
/* Navigation bar styles */
nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  align-content: center;
}
</style>