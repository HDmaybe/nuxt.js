<template>
  <div>
    <Navbar/>
    <main>
        
        <div class="content">
            <div class="content1" style=" width:100%">
                <img src="http://intellisys.co.kr/images/sub/visual/visual06.jpg" style="height:612px; width:100%;">
                <div class="innerletter">
                    <h3>
                    <span style="font-size: 34px; margin-bottom: 12px; display: block; line-height: 34px">
                    AI Fashion
                    <br>
                    Stylist Solution
                    </span>
                    <br>
                    AI 기술을 바탕으로, 개인의 패션 생활 및
                    <br class="mo">
                    기업의 패션 비즈니스의 전반을 지원합니다.
                    </h3>
                </div>
            </div>
        </div>
        <nav class="sec-move" style="margin-top: 20px;">
            <div class="move-button">
                    <button class="active hov" style="margin: auto; cursor: pointer;" @click="scrollToSection('c2')">Personal AI Stylist</button>
                    <button class="hov" style="margin: auto; cursor: pointer;" @click="scrollToSection('c3')">Catalog Management</button>
            </div>
        </nav>
        <section class="content2" id="c2">
                <div class="innerletter2">
                    <div class="title" style="display: flex ; padding: 55px 0;">
                        <h3>Personal
                            <br>
                            AI Stylist
                        </h3>
                        <p style="padding: 10px;">

                            400만 건의 코디 데이터에 학습된 인공지능이 패션 아이템 간의 어울림을 판별하여
                            1초 이내에 수십만 건의 상품 데이터에서 어울리는 옷, 나아가 오늘의 날씨와 TPO에 맞는
                            코디를 추천합니다.
                
                        </p>
                    </div>
                    <div class="ic">    
                        <img src="http://intellisys.co.kr/images/sub/object/diagram-obj16.png" style="width: 100%;">
                    </div>
                    
                </div>
                <div class="codi" style="background-color: #f9fafb;">
                    <h4 style="font-size: 34px;font-family: 'Noto Sans KR', sans-serif;font-weight: 700;color: #000;text-align: center; padding-top: 25px;">가을 단풍놀이를 위한 AI추천 코디</h4>
                    <ul style="display: flex;flex-wrap: wrap; padding: 100px 110px 30px; justify-content: space-between; align-items: center;">
                        <li><img src="http://intellisys.co.kr/images/sub/codi/codi01.png" alt="codi1"></li>
                        <li><img src="http://intellisys.co.kr/images/sub/codi/codi02.png" alt="codi2"></li>
                        <li><img src="http://intellisys.co.kr/images/sub/codi/codi03.png" alt="codi3"></li>
                        <li><img src="http://intellisys.co.kr/images/sub/codi/codi04.png" alt="codi4" ></li>
                    </ul>
                 </div>
            </section>
            <section class="content3" id="c3">
                <div class="innerletter2">
                    <div class="title" style="display: flex ; padding: 55px 0;">
                        <h3>Catalog
                            <br>
                            Management
                        </h3>
                        <p style="padding: 10px;">

                            1,000만건의 패션 상품과 코디 이미지 데이터에 학습된 인텔리시스의 패션특화 딥러닝 모델
                            StyleNet이 이미지에서 패션의 스타일 특징을 자동으로 분석하여
                            카테고리, 컬러, 핏, 디테일 등 패션 상품 속성 정보를 자동으로 입력합니다.
                        </p>
                    </div>
                    <div class="ic" style="width: 100%;">    
                        <img src="http://intellisys.co.kr/images/sub/object/diagram-obj14.jpg" style="width: 100%;">
                        <img src="http://intellisys.co.kr/images/sub/object/diagram-obj15.jpg" style="width: 100%;">
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </div>
</template>

<script>



export default {
    name: 'Product3',

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

.codi ul li img{
    width: 250px;
}

@media (max-width: 1920px){
.innerletter2 .title h3{
    min-width: 350px;
}}

.innerletter2 .title h3 {
    min-width: 450px;
    margin-right: 20px;
}

@media (max-width: 1920px){
.title h3 {
    min-width: 394px;
    font-size: 38px;
    font-weight: 700;
}}

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

section{
    display: block;
}

.innerletter{
    max-width: 1440px;
    width: 100%;
    height: calc(100% + 80px);
    margin: 0 auto ;
}

.title{
    max-width: 1440px;
    width: 100%;
    height: calc(100% + 80px);
    margin: 0 auto;
}


.align-items-center {
    align-items: center;
}

.d-flex {
    display: flex;
}

@media (max-width: 1920px){
.a-s-c.sec-diagram .a-s-c-personalized .animation.order-04 > img {
    margin-top: -87px;
}}
.a-s-c.sec-diagram .a-s-c-personalized .animation.order-04 > img {
    position: absolute;
    top: 50%;
    right: -19px;
    width: 100%;
    margin-top: -147px;
}
.sec-diagram img {
    opacity: 0;
    transform: translateY(40px);
    width: 100%;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Noto Sans KR', sans-serif;
}

ul{
    list-style: none;
}


.sec-diagram img {
    opacity: 0;
    transform: translateY(40px);
    width: 100%;
}

@media (max-width: 1920px){
.sec-move .move-button {
    max-width: 1024px;
}}

.sec-move .move-button {
    height: 100%;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0 auto;
}

.sec-move .move-button button.active {
    color: #ffffff!important;
    background-color: #684aec;
}
@media (max-width: 1920px){
.sec-move .move-button button {
    font-size: 16px;
    height: 42px;
    padding: 0 24px;
}}

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
    top: 69px;
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



</style>