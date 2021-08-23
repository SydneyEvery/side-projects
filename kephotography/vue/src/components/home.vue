<template>
  <div>
      <!-- <p v-bind="startSlide()" ></p> -->

    <div id="slide-box">
        <a id="previous" class="prev" @click="prev" href="#">&#10094; </a>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img id="current-image" :src="currentImg" />
      </div>
    </transition-group>
    
    <a id="next-pic" class="next" @click="next" href="#">&#10095; </a>
    <p>Portraits</p>
  </div>



      <div id="portriats">
          <p>place slide show box here</p>
          
          
      </div>
      <div id="lighting">
          <p>place lighting and special effects here</p>
      </div>
      <div id="scenery">
          <p id="desc" >place scenery here</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'home',
    data(){
        return{
            images: ["https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
             "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"],
            timer: null,
            currentIndex: 0
        }
    },
    mounted: function() {
    this.startSlide();
  },

  methods: {
    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};

</script>

<style>
img{
    height: 400px;
    width: auto;
    
    
    
}
#slide-box{
    background: black;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 6fr;
    grid-template-areas: "previous current-image next-pic desc";
    align-items: center;
   
}
p{
    color: white;
}


</style>