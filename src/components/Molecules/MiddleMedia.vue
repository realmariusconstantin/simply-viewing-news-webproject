<template>
  <!-- Main container for the middle media section -->
  <div class="middlemedia">
    <!-- Top section of the middle media -->
    <div class="top">
      <div class="M-content">
        <!-- Placeholder image -->
        <img src="https://via.placeholder.com/150" alt="placeholder" />
        <!-- Paragraph with placeholder text -->
        <p>LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM</p>
      </div>
    </div>
    <!-- Bottom section of the middle media -->
    <div class="bottom">
      <div class="M-content">
        <!-- Placeholder image -->
        <img src="https://via.placeholder.com/150" alt="placeholder" />
        <!-- Paragraph with placeholder text -->
        <p>LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM</p>
      </div>
    </div>
  </div>
</template>

<style>
/* Style for paragraph text */
p {
  font-size: 10px;
  color: black;
}

/* Main container style for the middle media section */
.middlemedia {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 186px;
  margin: 20px 0px 20px 0px;
  align-items: center;
  justify-content: center;
}

/* Style for the top and bottom sections */
.top, .bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 200px;
}

/* Style for the content within each section */
.M-content {
  max-width: 150px;
}
</style>