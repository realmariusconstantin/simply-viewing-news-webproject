<template>
  <!-- Main container for the footer -->
  <div class="MainFooter">
    <!-- Footer logo section -->
    <div class="FooterLogo">
      <LogoIcon/>
    </div>

    <!-- Footer text section -->
    <div>
      <p>© 2023 SVN. The SVN is not responsible for the content of external sites. Read about our approach to external
        linking.</p>
    </div>

    <!-- Social media icons section -->
    <div class="mediaFooter">
      <!-- Instagram icon -->
      <div class="Instagram">
        <InstagramLogo/>
      </div>
      <!-- Facebook icon -->
      <div class="Facebook">
        <FacebookLogo/>
      </div>
      <!-- Twitter icon -->
      <div class="Twitter">
        <TwitterLogo/>
      </div>
      <!-- YouTube icon -->
      <div class="Youtube">
        <YoutubeLogo/>
      </div>
    </div>
  </div>
</template>

<style>
/* Main container style for the footer */
.MainFooter {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: 20px;
  width: 100%;
  text-align: center;
}

/* Style for the paragraph text */
.MainFooter p {
  font-size: 12px;
  color: white;
}

/* Style for the social media icons section */
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
  components: {
    InstagramLogo,
    FacebookLogo,
    TwitterLogo,
    YoutubeLogo,
    LogoIcon
  }
}
</script>