<template>
  <div class="rightmedia-top">
    <div class="R-top-content">
      <img src="https://www.bhseotools.com/placeholder/300x150/d5d5d5/584959" alt="placeholder" class=" top-img"/>
      <p>LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUMLOREL PISUM
        LOREL PISUM LOREL PISUM LOREL PISUM
        LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUMLOREL PISUM LOREL
        PISUM LOREL PISUM LOREL PISUM
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
  <div class="rightmedia-bottom">
    <div class="left">
      <div class="left-content">
        <img src="https://via.placeholder.com/150" alt="placeholder"/>
        <p>LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM</p>
      </div>
    </div>
    <div class="right">
      <div class="right-content">
        <img src="https://via.placeholder.com/150" alt="placeholder"/>
        <p>LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM</p>
      </div>
    </div>
  </div>
</template>

<style>
p {
  font-size: 12px;
  color: black;
}

.rightmedia-top {
  gap: 20px;
  margin: 20px;
  align-items: center;
  justify-content: center;
  display: flex;

}

.rightmedia-bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px;
  align-items: center;
  justify-content: center;

  .right, .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

}

.R-top-content {
  max-width: 300px;
}

.right-content, .left-content {
  max-width: 150px;
}
</style>