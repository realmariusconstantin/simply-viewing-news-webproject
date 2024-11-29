<template>
  <!-- Main container for the top section of the right media -->
  <div class="rightmedia-top">
    <div class="R-top-content">
      <!-- Placeholder image -->
      <img src="https://www.bhseotools.com/placeholder/300x150/d5d5d5/584959" alt="placeholder" class=" top-img"/>
      <!-- Paragraph with placeholder text -->
      <p>LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUMLOREL PISUM
        LOREL PISUM LOREL PISUM LOREL PISUM
        LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUMLOREL PISUM LOREL
        PISUM LOREL PISUM LOREL PISUM
        LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUMLOREL PISUM LOREL
        PISUM LOREL PISUM LOREL PISUM
        LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUMLOREL PISUM LOREL
        PISUM LOREL PISUM LOREL PISUM
        LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUMLOREL PISUM LOREL
        PISUM LOREL PISUM LOREL PISUM</p>
    </div>
  </div>
  <!-- Main container for the bottom section of the right media -->
  <div class="rightmedia-bottom">
    <!-- Left section of the bottom media -->
    <div class="left">
      <div class="left-content">
        <!-- Placeholder image -->
        <img src="https://via.placeholder.com/150" alt="placeholder"/>
        <!-- Paragraph with placeholder text -->
        <p>LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM</p>
      </div>
    </div>
    <!-- Right section of the bottom media -->
    <div class="right">
      <div class="right-content">
        <!-- Placeholder image -->
        <img src="https://via.placeholder.com/150" alt="placeholder"/>
        <!-- Paragraph with placeholder text -->
        <p>LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM</p>
      </div>
    </div>
  </div>
</template>

<style>
/* Style for paragraph text */
p {
  font-size: 12px;
  color: black;
}

/* Main container style for the top section of the right media */
.rightmedia-top {
  gap: 20px;
  margin: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
}

/* Main container style for the bottom section of the right media */
.rightmedia-bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px;
  align-items: center;
  justify-content: center;
}

/* Style for the left and right sections */
.right, .left {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Style for the top content */
.R-top-content {
  max-width: 300px;
}

/* Style for the content within the left and right sections */
.right-content, .left-content {
  max-width: 150px;
}
</style>