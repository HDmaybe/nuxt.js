<template>
  <div class="container">

  <Navbar/>
  <div class="image-container">
    <div class="image1">
    <img src="https://i.ytimg.com/vi/c_zE6-kX8AA/maxresdefault.jpg" alt="background-image" />
    </div>
    <div class="text1">

    </div>
  <div class = "text2">
    <h3>
      AI Driven
      <br>
      Innovations
    </h3>
  </div>
  </div>
  <div class="chumdan">
    <div class="smallBox">
      <div><img src="http://intellisys.co.kr/images/icon/ico-company01.png"></div>
      <h4>차별화된 첨단 기술력과 <br> 최우수 인재팀</h4>
      <h5>서울대 석박사 출신 <br> AI 엔지니어 팀</h5>
    </div>
    <div class="smallBox">
      <div><img src="http://intellisys.co.kr/images/icon/ico-company02.png"></div>
      <h4>인공지능 개인화 <br> 추천 서비스</h4>
      <h5>최적의 상품을 추천하는 <br> AI 하이브리드 추천</h5>
    </div>
    <div class="smallBox">
      <span><img src= "http://intellisys.co.kr/images/icon/ico-company03.png"></span>
     <h4>빠르게 성장하는 <br> 거대 글로벌 시장</h4>
      <h5>언택트 소비 증가로 <br> 급성장하는 e-commerce</h5>
    </div>
  </div>
  <div class="members">
  <div class = "n1"><h3><b>Intellisys<br>Members</b></h3></div>
  <p>인텔리시스는 딥러닝 연구와 이를 활용한 첨단 응용서비스를 개발하고 있으며,<br>
서울대 지능형 데이터 시스템 연구실과의 밀착 연구개발을 통해 최우수 인력과<br>
원천기술을 확보하고 있습니다.</p>

  </div>
  <div id = "mem" class="memberCircle">
    <ul> 
      <li v-for="member in members1" :key="member.index">
      <h4>{{ member.name }}</h4>
      <span class="circle">{{ member.role }}</span>
    </li>
    </ul>
    <ul>
      <li v-for="member in members2" :key="member.index">
      <h4>{{ member.name }}</h4>
      <span class="circle">{{ member.role }}</span>
      </li>
    </ul>
  </div>
  
  <Footer/>
  


  
  </div>

</template>
  



  <script>
  
  import Navbar from '~/components/Navbar.vue';
  import Footer from '~/components/Footer.vue';
  
  export default {
    
    name: 'CompanyPage',
    el:"mem",
    data() {
        return{
            members1: [
              {index: 1, role : 'CEO', name: 'EY Park'},
              {index: 2,role : 'CEO', name: 'SC Park'},
              {index: 3,role : 'CEO', name: 'SG Lee'},
              {index: 4, role : 'CEO', name: 'JW Baek'}
            ],
            members2: [
            {index: 1,role : 'CEO', name: 'JH Kim'},
            {index: 2,role : 'CEO', name: 'SH Lee'},
            {index: 3,role : 'CEO', name: 'HM Son'},
            {index: 4, role : 'CEO', name: 'JS Park'}
            ]
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

.n1{
  width:30%;
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
.members{

  display:flex;
  background-color:beige;
  text-align: left;
  

  
}

.members p{
  color:gray;
}

.company-people ul li span {
    position: absolute;
    color: #000;
    font-size: 12px;
    font-weight: 900;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
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



h3{
  display:block;
  margin-block-start: lem;
  margin-block-end: lem;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.chumdan{
  display: flex;
  justify-content: space-between;
  padding: 92px 50px;
  margin: auto;
}

.smallBox{
  margin : 70px;
  text-align: right;
}

.memberCircle ul{
  display: flex;
}
.memberCircle ul li{  
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 130px;
    height: 130px;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0;
    transform: translateY(40px);

}

.memberCircle ul li span {
    position: absolute;
    color: #000;
    font-size: 12px;
    font-weight: 900;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
}

.memberCircle ul li h4 {
    font-size: 24px;
    font-weight: 900;
    color: #433856;
}



.memberCircle ul {
    display: flex;
    justify-content: center;
    gap: 20px;
}

@keyframes fadeIn-up{
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.memberCircle ul:nth-child(1) li:nth-child(2) {
    animation: fadeIn-up 1s 1.3s ease-in-out forwards;
}



</style>