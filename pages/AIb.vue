<template>
    <div>
        <Navbar/>
        <div class="AIimage">
            <img src="http://intellisys.co.kr/images/voucher/banner.jpg">
        </div>
        <Footer/>
    </div>
    
    
</template>

<script>

import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';

export default {
    components: {
      Navbar,
      Footer
    },
}
</script>

<style scoped>

.AIimage{
    
    background-size: cover;
    max-width: 100%;
}

</style>