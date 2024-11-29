<template>
  <div class="Article">

    <div class="Business">
      <div class="business">
        <img src="@/assets/Images/Articles/Business.png" alt="business">
        <p>Business</p>
      </div>
      <div class="ExecutiveLounge">
        <img src="@/assets/Images/Articles/ExecutiveLounge.png" alt="ExecutiveLounge">
        <p>Executive Lounge</p>
      </div>
      <div class="TechnologyOfBusiness">
        <img src="@/assets/Images/Articles/TechnologyOfBusiness.png" alt="TechnologyOfBusiness">
        <p>Technology of Business</p>
      </div>
      <div class="FutureOfBusiness">
        <img src="@/assets/Images/Articles/FutureOfBusiness.png" alt="FutureOfBusiness">
        <p>Future of Business</p>
      </div>
      <div class="MarketData">
        <img src="@/assets/Images/Articles/MarketData.png" alt="MarketData">
        <p>Market Data</p>
      </div>
    </div>

    <div class="Innovation">
      <div class="innovation">
        <img src="@/assets/Images/Articles/Innovation.png" alt="Innovation">
        <p>Innovation</p>
      </div>
      <div class="Technology">
        <img src="@/assets/Images/Articles/Technology.png" alt="Technology">
        <p>Technology</p>
      </div>
      <div class="ScienceAndHealth">
        <img src="@/assets/Images/Articles/ScienceAndHealth.png" alt="ScienceAndHealth">
        <p>Science and Health</p>
      </div>
      <div class="AiVsTheMind">
        <img src="@/assets/Images/Articles/AiVsTheMind.png" alt="AiVsTheMind">
        <p>AI vs The Mind</p>
      </div>
      <div class="ArtificialIntelligence">
        <img src="@/assets/Images/Articles/ArtificialIntelligence.png" alt="ArtificialIntelligence">
        <p>Artificial Intelligence</p>
      </div>
    </div>

  </div>
</template>

<style>
.Article {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  margin: 20px 0px 20px 0px;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;
    height: 200px;
    border: black 2px solid;
  }

  p {
    font-size: 20px;
    color: black;
  }

}

.Business, .Innovation {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px;
  margin: 20px 0px 20px 0px;
  align-items: center;
  justify-content: center;


}


</style>
<script>
export default {
  name: 'ArticlePage',
  components: {},
}
</script>
