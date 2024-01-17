<template>
    <div>
    <Navbar>
    </Navbar>
    <main>
        <div class="content">
            <div class="content1" style="width: 100%">
                <img src="http://intellisys.co.kr/images/sub/visual/visual01.jpg" style="width: 100%;">
                <div class="innerletter">
                    <h3>
                    <span style="font-size: 34px; margin-bottom: 12px; display: block; line-height: 34px">
                    Intelligent
                    <br>
                    Personalization Solution
                    </span>
                    <br>
                    인공지능이 개인의 행동이력과 이벤트 상황 등
                    <br class="mo">
                    다양한 특징을 학습해서 차세대 이커머스에 필수적인
                    <br class="mo">
                    초개인화된 추천 기술을 제공합니다.
                    </h3>
                </div>
            </div>
            <!--1번째거 start-->
            <nav class="sec-move" style="margin-top: 20px;">
                <div class="move-button">
                    <button class="active hov" @click="scrollToSection('c2')">Context-aware Recommendation Engine</button>
                    <button class="hov" @click="scrollToSection('c3')">Persona Learning Engine</button>
                    <button class="hov" @click="scrollToSection('c4')">Micro-genre based Curation Engine</button>
                </div>
            </nav>
            <section class="content2" id="c2">
                <div class="innerletter2">
                    <div class="title" style="display: flex ; padding: 55px 0;">
                        <h3>Context-aware
                            <br>
                            Recommendation
                            <br>
                            Engine
                        </h3>
                        <p style="padding: 10px;">

                        인공지능이 사용자의 행동과 제품의 텍스트, 이미지 속성 그리고 이벤트 시점의
                        날씨, 시즌, 장소 등 다양한 신호를 복합적으로 이해해 사용자의
                        Context(맥락)에 내포된 니즈를 파악해 초개인화된 추천을 합니다.
                
                        </p>
                    </div>
                    <div class="diagram">
                        <img src="http://intellisys.co.kr/images/sub/object/ico-diagram-object.png">
                        <img src="http://intellisys.co.kr/images/sub/object/diagram-text01.png">
                        <img src="http://intellisys.co.kr/images/sub/object/diagram-line01.png">
                        <div class="diagram-box">
                            <img src="http://intellisys.co.kr/images/sub/object/diagram-line02.png">
                            <img src="http://intellisys.co.kr/images/sub/object/diagram-obj01.png">
                        </div>
                    </div> 
                </div>
                <div>

                </div>
            </section>

            <section class="content3" id="c3">
                <div class="innerletter2">
                    <div class="title" style="display: flex ; padding: 55px 0;">
                        <h3>Persona
                            <br>
                            Learning
                            <br>
                            Engine
                        </h3>
                        <p style="padding: 10px;">

                            인공지능이 사용자의 행동과 행동에 내포된 텍스트, 이미지를 분석해 개개인의 페르소나를 학습하여, 초개인화된 추천을 합니다.
                
                        </p>
                    </div>
                    <div class="diagram">
                        <div class="diagram-box">
                            <img src="http://intellisys.co.kr/images/sub/object/diagram-obj02.png">
                        </div>
                    </div> 
                </div>
                <div>

                </div>
            </section>

            <section class="content4" id="c4">
                <div class="innerletter2">
                    <div class="title" style="display: flex ; padding: 55px 0;">
                        <h3>Micro-genre
                            <br>
                            based
                            <br>
                            Curation Engine
                        </h3>
                        <p style="padding: 10px;">

                        인공지능이 리뷰, SNS, 디지털 컨텐츠를 분석하여 트랜드가 되는 마이크로 장르를 추출하고, 마이크로 장르와 어울리는 제품을 자동으로 큐레이션하여 추천 합니다.
                
                        </p>
                    </div>
                    <div class="diagram">
                        <div class="diagram-box">
                            <img src="http://intellisys.co.kr/images/sub/object/diagram-obj03.png">
                        </div>
                    </div> 
                </div>
                <div>

                </div>
            </section>
            
        </div>
    </main>
    <Footer/>
    </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';

export default {
    name: 'Product',
    components :  {
        Navbar, Footer
    },
    methods:{
        scrollToSection(sectionId){
            const element = document.getElementById(sectionId);

            if(element){
                const location = element.offsetTop;
                window.scrollTo({top:location-100, behavior:'smooth'});
            }
        }
    }
}
</script>

<style>
section{
    display: block;
}

.innerletter{
    
    width: 100%;
    height: calc(100% + 80px);
    margin: 0 auto ;
}

.title{
    
    width: 100%;
    height: calc(100% + 80px);
    margin: 0 auto;
}

@media (max-width: 1920px){
.content2 .title h3{
    min-width: 350px;
}

.title h3 {
    min-width: 394px;
    font-size: 38px;
    font-weight: 700;
}

.sec-move .move-button {
    max-width: 1024px;
}

.sec-move .move-button button {
    font-size: 16px;
    height: 42px;
    padding: 0 24px;
}

}

.content2 .title h3 {
    min-width: 450px;
    margin-right: 20px;
}


.title h3 {
    font-size: 38px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    color: #000;
    min-width: 515px;
}

.title p{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 600;
    color: #8d8d8d;
}
  
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.sec-move .move-button {
    height: 100%;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    max-width: 1024px;
}

.sec-move .move-button button.active {
    color: #ffffff!important;
    background-color: #684aec;
}

.sec-move .move-button button {
    padding: 0 32px;
    border-radius: 25px;
    font-size: 19px;
    font-family: "Circular Std Medium";
    font-weight: 400;
    color: #8d8d8d;
    margin-right: 10px;
    height: 50px;
    transition: 0.3s ease;
}


.sec-move{
    height: 79px;
    position: sticky;
    top: 74px;
    z-index: 999999;
    background-color: white;
}

.content1{
    position:relative;
}

.innerletter{
    position:absolute;
    top: 50%;
    left: 9%;
}

.innerletter h3{
    color: white;
}

nav{
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-family: 'Noto Sans KR', sans-serif;
}

button{
    border:none;
    background: none;
    outline: none;
    cursor:pointer;
}
.sec-move .move-button button:hover{
    color:#684aec;

}

.diagram{
    text-align: center;
}

</style>