<template>
  <nav>
<MenuWhite />
    <div class="signup">
      <router-link to="/signup">
        <img src="@/assets/Icons/others/Sign%20in.png" alt="signup" />
      </router-link>
    </div>

  </nav>
</template>

<script>
import MenuWhite from "@/components/atoms/MenuWhite.vue";

export default {
  components: {
    MenuWhite,
  },
};
</script>

<style>

//Navigation styles
nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 20px;
}

//Signup button styles
.signup img {
  cursor: pointer;
}

</style>
