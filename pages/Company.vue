<template>
  <div class="container">

  <Navbar/>
  <div class="image-container">
    <img src="http://intellisys.co.kr/images/sub/visual/visual04.jpg" alt="background-image" />
    <div class="text1" style="position: absolute; top:50%; left:3%">
      <P style="color:white;">인텔리시스는 서울대학교 컴퓨터공학부 지능형 데이터 시스템
        <br>
        연구실의 핵심 멤버들이 축적된 연구 역량을 기반으로 설립한
        <br>
        AI 벤처기업으로 AI, BIG DATA, 차세대 e-커머스에 특화된
        <br>
        첨단 기술로 리테일 패러다임의 혁신을 추구합니다.
      </P>
    </div>
  </div>
  <div class = "text2" style="margin-bottom: 50px;">
    <h3 style="margin-top: 40px;">
      AI Driven
      <br>
      Innovations
    </h3>
  </div>
  <div class="chumdan" style="border-top: solid 1px rgb(157, 156, 156); width: 100%;">
    <div class="smallBox" >
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
  <div class="memberCircle">
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
    
    data() {
        return{
            members1: [
              {index: 1, role : 'CEO', name: 'EY Park'},
              {index: 2,role : 'CTO', name: 'SC Park'},
              {index: 3,role : 'Adviser', name: 'SG Lee'},
              {index: 4, role : 'Engineer', name: 'JW Baek'}
            ],
            members2: [
            {index: 1,role : 'Engineer', name: 'JH Kim'},
            {index: 2,role : 'Engineer', name: 'SH Lee'},
            {index: 3,role : 'Engineer', name: 'TS Jeong'},
            {index: 4, role : 'Intern', name: 'HG Yoon'}
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

@media (max-width: 1920px){
.text2 h3 {
    min-width: 394px;
    font-size: 38px;
    font-weight: 700;
}}
.text2 h3 {
    font-size: 50px;
    /* font-family: "Circular Std Medium"; */
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    color: #000;
    min-width: 515px;
    margin-left: 50px;
    margin-top: 20px;

}

.container{
  display: flex;
  flex-direction: column;
  
}

.smallBox h4{
  font-size: 18px;
    line-height: 22px;
    margin-bottom: 16px;
    font-size: 20px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    color: #000;
    line-height: 29px;
    margin-bottom: 22px;
    text-align: center;
    transform: translateY(40px);
}


.smallBox h5{
  margin-top: 50px;
  font-size: 18px;
  font-weight: 400;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: center;
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
  width: 100%;
  display:flex;
  background-color:#fafafa;
  text-align: left;
  height: 200px;
  padding-top: 60px;


  
}


.members p{
  color:gray;
  font-size: 18px;
    line-height: 27px;
    margin-bottom: 16px;
    width: 110%;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
}

.members h3{
    font-size: 38px;
    line-height: 42px;
    margin-bottom: 26px;
    min-width: 394px;
    font-weight: 700;
    font-family: 'Noto Sans KR', sans-serif;
    margin-left: 70px;
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

@media(max-width: 1920px){

.page-visual h3 {
    font-size: 18px;
    line-height: 34px;
}}
.text1 p {
    font-size: 24px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    color: #fff;
    line-height: 45px;
    transform: translateY(25px);
    opacity: 0;
    animation: fadeIn-up 0.75s 0.25s ease forwards;
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



</style>