<template>
  <div class="leftmedia">
    <div class="L-top">
      <div class="L-content">
        <p> lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum
          lorel ipsum lorel ipsum lorel ipsum</p>
        <img src="https://via.placeholder.com/150" alt="placeholder"/>
      </div>
    </div>
    <div class="L-middle">
      <div class="L-content">
        <img src="https://via.placeholder.com/150" alt="placeholder"/>
        <p> lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum
          lorel ipsum lorel ipsum lorel ipsum</p>
      </div>
    </div>
    <div class="L-bottom">
      <div class="L-content">
        <p> lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum
          lorel ipsum lorel ipsum lorel ipsum</p>
        <img src="https://via.placeholder.com/150" alt="placeholder"/>
      </div>
    </div>
  </div>

</template>

<style>
p{
  font-size: 12px;
  color: black;
}

.leftmedia {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 150px;
  margin: 20px;
  justify-content: center;
}

.L-content{
  display: flex;
  align-items: center;
  justify-content: right;

}
</style>