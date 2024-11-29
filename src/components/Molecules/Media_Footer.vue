<template>

  <div class="MainFooter">
    <div class="FooterLogo">
      <LogoIcon/>
    </div>

    <div>
      <p>© 2023 SVN. The SVN is not responsible for the content of external sites. Read about our approach to external
        linking.</p>
    </div>


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
  </div>
</template>

<style>
.MainFooter {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: 20px;
  width: 100%;
  text-align: center;
  p{
    font-size: 12px;
    color:white;
  }
}

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
import LogoIcon from "@/components/atoms/LogoIcon.vue";

export default {

  name: 'MediaFooter',
  components: {InstagramLogo, FacebookLogo, TwitterLogo, YoutubeLogo, LogoIcon},
}


</script>