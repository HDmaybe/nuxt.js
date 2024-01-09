<template>
  <div class="container">

<Navbar/>
  <div class="image-container">
    <div class="image1">
    <img src="https://i.ytimg.com/vi/c_zE6-kX8AA/maxresdefault.jpg" alt="background-image" />
    </div>
    <div class="text1">
        {{ a }}
    </div>
  <div class = "text2">
    {{ b }}
  </div>
  </div>
  <div class="image-container">
    <img src="https://i.ytimg.com/vi/c_zE6-kX8AA/maxresdefault.jpg" alt="background-image" />
  </div>

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
    name: 'CompanyPage',
    data() {
        return{
            a : '인텔리시스는 서울대학교 컴퓨터공학부 지능형 데이터 시스템 연구실의 핵심 멤버들이 축적된 연구 역량을 기반으로 설립한 AI 벤처기업으로 AI, BIG DATA, 차세대 e-커머스에 특화된 첨단 기술로 리테일 패러다임의 혁신을 추구합니다.',
            b : 'AI Driven Innovations'
        };

    },
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
  position: relative;
}

.image-container image{
  width:100%;
  height: auto;
  object-fit: cover;
  display: block;
}

.text1{
    position: absolute;
    top : 40%;
    left : 50%;
    white-space:normal;
    width: 200px;
    height: 50px;
    color : white;

}

.text2{
    color:black;
    width: 300px;
    font-size: x-large;
}

</style>