<template>
  <div class="container">

  <Navbar/>

    










    <div class="image-container">
      <img src="https://i.ytimg.com/vi/c_zE6-kX8AA/maxresdefault.jpg" alt="background-image" />
    </div>
    <div id="restory_i_popup" class="pc show" style="position: absolute; top: 15%; left: 60%; width: 450px; height: 500px; z-index: 11000">
    <img src="https://www.snu.ac.kr/webdata/kor/gallery/thumb/4cez9c0zb5dz7c2z7b5z762z427z3b3zdf5z200z98.jpg" style="-webkit-user-drag: none; width: 100%">
    <div style="background-color: #DAC8FF; line-height: 1.3; border-radius: 0 0 15px 15px;">
        <div style="padding: 30px 0;">
            <p style="font-size: 22px; text-align: center; margin-bottom: 24px;">
                <span style="font-weight: 700;">이미지만 입력</span>하면<br>
                자동으로 생성되는 <span style="font-weight: 700;">상품 소개글</span><br>
                "<span style="font-weight: 700; color: #A712A3">루킷</span>"출시
            </p>
            <p style="text-align: center;color: #e26e6e;">*사용자 폭증으로 인하여<br> 9월15일까지 루킷 체험서비스가 일시 중단됩니다.</p>

        </div>
        <div style="display: flex; padding-bottom: 10px; width: max-content; margin-left: auto; margin-right: 50px">
            <p style="cursor: pointer;" onclick="set_storage()">오늘 하루 이 창 열지 않기</p>
            <img @click="delete_popup()" src="https://www.snu.ac.kr/webdata/kor/gallery/thumb/4cez9c0zb5dz7c2z7b5z762z427z3b3zdf5z200z98.jpg" style="width: 13px; object-fit: contain; margin-left: 12px; cursor: pointer">
        </div>
    </div>
</div>
  <Footer/>
    
 

    
  </div>
  

</template>

<script>

import Menu from '~/components/Menu.vue';
import Footer from '~/components/Footer.vue';

export default {
  name: 'IndexPage',

  components: {
    Menu,
    Footer,
  },
  methods: {
    delete_popup() {
      const popup = document.getElementById('restory_i_popup');
      if (popup) {
        popup.style.display = 'none';
      }
    },
    set_storage() {
      localStorage.setItem('hide_popup', 'true');
      this.delete_popup();
    },
  },
  mounted() {
    const hidePopup = localStorage.getItem('hide_popup');
    if (hidePopup) {
      this.delete_popup();
    }
  },

}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;

  
}
img{
  margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Noto Sans KR', sans-serif;
    overflow-clip-margin: content-box;
    overflow: clip;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
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
  margin: 0;
  padding: 0;
}

</style>


