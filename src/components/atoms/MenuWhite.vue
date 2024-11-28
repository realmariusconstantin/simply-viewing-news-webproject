<template>
  <!-- Dropdown Menu -->
  <div class="dropdown">
    <button class="dropdown-button" @click="toggleDropdown"><img src="@/assets/Icons/NavbarMedia/menu_white.png" alt="menu"></button>
    <div class="dropdown-content" :class="{ active: isDropdownOpen }">
      <router-link to="/">Home</router-link>
      <router-link to="/article">Articles</router-link>
      <router-link to="/admin">Admin</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};

</script>
<style>
//Dropdown styles
.dropdown {
  align-content: center;
  position: relative;
  display: inline-block;
}

.dropdown-button {
  cursor: pointer;
  font-size: 16px;
  border: none;
  background-color: #000000;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #000000;
  border-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 4px;

}

.dropdown-content a {
  color: #ffffff;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  border-bottom: 2px solid #ffffff;
}

.dropdown-content a:last-child {
  border-bottom: none;
}

.dropdown-content a:hover {
  background-color: #696767;
}

.dropdown-content.active {
  display: block;
 border-color:white;
}
</style>