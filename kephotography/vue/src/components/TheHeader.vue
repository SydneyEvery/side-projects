<template>
  <div id="main">
      <h1 id="title">K E PHOTOGRAPHY</h1>
      <div id="nav">
      <p id="home">Home</p>
      <p id="about">About</p>
      <p id="gallery">Gallery</p>
      <p id="social">Social</p>
      </div>
  </div>
</template>

<script>
export default {
    name: "the-header"

}
</script>

<style>
#title{
    color: black;
    size: 400px;
    margin: 10px;
    text-align: center;
    
}
#main{
    background: grey;
}
#nav{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
}

</style>