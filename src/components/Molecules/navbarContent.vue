<template>
  <nav>
    <MenuWhite/>
    <LogoIcon/>
    <SignIn/>
  </nav>
</template>

<script>
import MenuWhite from "@/components/atoms/MenuWhite.vue";
import LogoIcon from "@/components/atoms/LogoIcon.vue";
import SignIn from "@/components/atoms/SignIn.vue";

export default {
  components: {
    SignIn,
    LogoIcon,
    MenuWhite,
  },
};
</script>

<style>

//Navigation styles
nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  align-content: center;
}
</style>
