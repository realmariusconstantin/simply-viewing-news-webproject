<template>
  <div class="middlemedia">
    <div class="top">
      <div class="M-content">
        <img src="https://via.placeholder.com/150" alt="placeholder" />
        <p>LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM</p>
      </div>
    </div>
    <div class="bottom">
      <div class="M-content">
        <img src="https://via.placeholder.com/150" alt="placeholder" />
        <p>LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM LOREL PISUM</p>
      </div>
    </div>
  </div>
</template>

<style>
p{
  font-size: 10px;
  color:black;
}
.middlemedia{
  display:grid;
  grid-template-rows: 1fr 1fr;
  gap: 186px;
  margin:20px 0px 20px 0px;
  align-items: center;
  justify-content: center;
}
.top , .bottom{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 200px;
}

.M-content{
  max-width: 150px;

}
</style>