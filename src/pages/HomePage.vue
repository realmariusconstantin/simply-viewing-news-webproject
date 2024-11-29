<template>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Home Page</title>
  </head>
  <div class="news-container">
    <div class="news-right">
      <LeftMedia/>

    </div>
    <div class="news-middle">
      <MiddleMedia/>

    </div>

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