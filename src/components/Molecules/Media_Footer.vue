<template>
  <div class="mediaFooter">
    <div class="Instagram">
      <InstagramLogo/>
    </div>
    <div class="Facebook">
      <FacebookLogo/>
    </div>
    <div class="Twitter">
      <TwitterLogo/>
    </div>
    <div class="Youtube">
      <YoutubeLogo/>
    </div>

  </div>
</template>

<style>
.mediaFooter {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  margin-top: 20px;

}
</style>
<script>
import InstagramLogo from "@/components/atoms/InstagramLogo.vue";
import FacebookLogo from "@/components/atoms/FacebookLogo.vue";
import TwitterLogo from "@/components/atoms/TwitterLogo.vue";
import YoutubeLogo from "@/components/atoms/YoutubeLogo.vue";

export default {

  name: 'MediaFooter',
  components: {InstagramLogo, FacebookLogo, TwitterLogo, YoutubeLogo},
}


</script>