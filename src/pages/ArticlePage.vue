<template>
  <!-- Main container for the entire article section -->
  <div class="Article">

    <!-- Section for "Business" related articles -->
    <div class="Business">
      <!-- Individual category: Business -->
      <div class="business">
        <img src="@/assets/Images/Articles/Business.png" alt="business">
        <p>Business</p>
      </div>
      <!-- Individual category: Executive Lounge -->
      <div class="ExecutiveLounge">
        <img src="@/assets/Images/Articles/ExecutiveLounge.png" alt="ExecutiveLounge">
        <p>Executive Lounge</p>
      </div>
      <!-- Individual category: Technology of Business -->
      <div class="TechnologyOfBusiness">
        <img src="@/assets/Images/Articles/TechnologyOfBusiness.png" alt="TechnologyOfBusiness">
        <p>Technology of Business</p>
      </div>
      <!-- Individual category: Future of Business -->
      <div class="FutureOfBusiness">
        <img src="@/assets/Images/Articles/FutureOfBusiness.png" alt="FutureOfBusiness">
        <p>Future of Business</p>
      </div>
      <!-- Individual category: Market Data -->
      <div class="MarketData">
        <img src="@/assets/Images/Articles/MarketData.png" alt="MarketData">
        <p>Market Data</p>
      </div>
    </div>

    <!-- Section for "Innovation" related articles -->
    <div class="Innovation">
      <!-- Individual category: Innovation -->
      <div class="innovation">
        <img src="@/assets/Images/Articles/Innovation.png" alt="Innovation">
        <p>Innovation</p>
      </div>
      <!-- Individual category: Technology -->
      <div class="Technology">
        <img src="@/assets/Images/Articles/Technology.png" alt="Technology">
        <p>Technology</p>
      </div>
      <!-- Individual category: Science and Health -->
      <div class="ScienceAndHealth">
        <img src="@/assets/Images/Articles/ScienceAndHealth.png" alt="ScienceAndHealth">
        <p>Science and Health</p>
      </div>
      <!-- Individual category: AI vs The Mind -->
      <div class="AiVsTheMind">
        <img src="@/assets/Images/Articles/AiVsTheMind.png" alt="AiVsTheMind">
        <p>AI vs The Mind</p>
      </div>
      <!-- Individual category: Artificial Intelligence -->
      <div class="ArtificialIntelligence">
        <img src="@/assets/Images/Articles/ArtificialIntelligence.png" alt="ArtificialIntelligence">
        <p>Artificial Intelligence</p>
      </div>
    </div>

  </div>
</template>

<style>
/* Main container styles for the Article page */
.Article {
  width: 100%; /* Full width of the parent container */
  height: 100%; /* Full height of the parent container */
  background-color: #ffffff; /* White background */
  display: grid; /* Grid layout */
  grid-template-rows: 1fr 1fr; /* Two equal rows */
  gap: 20px; /* Space between rows */
  margin: 20px 0px; /* Vertical margin */
  align-items: center; /* Vertically align items */
  justify-content: center; /* Horizontally center items */

  /* Styles for images inside the Article container */
  img {
    width: 200px; /* Set fixed width for images */
    height: 200px; /* Set fixed height for images */
    border: black 2px solid; /* Add a black border */
  }

  /* Styles for text (paragraphs) inside the Article container */
  p {
    font-size: 20px; /* Set font size */
    color: black; /* Set text color to black */
  }
}

/* Grid layout for Business and Innovation sections */
.Business, .Innovation {
  display: grid; /* Grid layout */
  grid-template-columns: repeat(5, 1fr); /* Five equal columns */
  gap: 50px; /* Space between items */
  margin: 20px 0px; /* Vertical margin */
  align-items: center; /* Vertically align items */
  justify-content: center; /* Horizontally center items */
}
</style>

<script>
export default {
  // Component name
  name: 'ArticlePage',
  // No additional components are being used
  components: {},
}
</script>
