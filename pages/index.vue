<template>
  <div class="container">

  <Navbar/>
    <div class="image-container">
      <img src="https://i.ytimg.com/vi/c_zE6-kX8AA/maxresdefault.jpg" alt="background-image" />
    </div>
    
  <Footer/>
    
 

    
  </div>
  

</template>

<script>

import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';

export default {
  name: 'IndexPage',

  components: {
    Navbar,
    Footer,
  },
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  
}

.image-container{
  text-align: center;
  width:100%;
  overflow: hidden;
}

.image-container image{
  width:100%;
  height: auto;
  object-fit: cover;
  display: block;
}

</style>
