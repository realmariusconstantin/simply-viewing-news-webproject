<template>
  <!-- Main HTML structure -->
  <html lang="en">
  <head>
    <!-- Meta tags for character set and viewport settings -->
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <!-- Page title -->
    <title>Home Page</title>
  </head>
  <!-- Container for news sections -->
  <div class="news-container">
    <!-- Right section of the news -->
    <div class="news-right">
      <LeftMedia/>
    </div>
    <!-- Middle section of the news -->
    <div class="news-middle">
      <MiddleMedia/>
    </div>
    <!-- Left section of the news -->
    <div class="news-left">
      <RightMedia/>
    </div>
  </div>
  </html>
</template>

<script>
import RightMedia from "@/components/Molecules/RightMedia.vue";
import MiddleMedia from "@/components/Molecules/MiddleMedia.vue";
import LeftMedia from "@/components/Molecules/LeftMedia.vue";

export default {
  name: 'HomePage',
  components: {
    LeftMedia,
    MiddleMedia,
    RightMedia
  },
}
</script>

<style>
/* Styles for the news container */
.news-container {
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  align-content: center;
  margin: 50px;
  box-shadow: #cccccc 0px 0px 10px;
}
</style>