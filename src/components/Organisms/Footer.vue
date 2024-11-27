<template>
  <footer>
<div class="container">
  <div class="left">
  </div>
  <div class="Middle">

  </div>
  <div class="Right">
<MediaFooter/>
  </div>

</div>
  </footer>
</template>

<script>

import MediaFooter from "@/components/Molecules/Media_Footer.vue";

export default {
  name: 'MainFooter',
  components: {
    MediaFooter,
  },
}

</script>

<style>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: 20px;
}

</style>
