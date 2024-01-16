<template>
    <div>
        <Navbar/>
        <div class="content" style="width: 100%;">
            <section id="ai-voucher-top-img" class="page-visual ai-voucher">            
            <div class="ButtonM">
                <button @click="click()" class="voucher-btn">문의하기</button>
            </div>
            </section>
            <div id="container" justify="center" class="sec-inner show" style="width: 100%;">
                <div id="#inner-container">
      
                <div class="sec-title show" style="padding: 35px 0px; border-bottom: none; opacity: 1; animation: none; transform: none;">
                    <h3 style="font-size: 30px; font-family: 'GmarketSansBold', 'Noto Sans KR'">
                    AI 바우처 사업이란?
                    </h3>
                </div>
                <div style="margin-left: 30px;">
                    <img class="voucher_text" src="http://intellisys.co.kr/images/voucher/voucher_text.png">
                 </div>
                <div class="sec-title show" style="border-bottom: none; opacity: 1; animation: none; transform: none">
                    <h3 style="font-size: 30px; font-family: 'GmarketSansBold', 'Noto Sans KR'">
                        인텔리시스 AI 솔루션
                    </h3>   
                </div>
                <div class="company-diagram-text" style="width: 100%;">
                    <div class="slidebox" style="width: 100%;">
        
          
                        <input type="radio" name="slide" checked="" id="slide01">
                        <input type="radio" name="slide" id="slide02">
                        <input type="radio" name="slide" id="slide03">         
                        <input type="radio" name="slide" id="slide04">
                        <input type="radio" name="slide" id="slide05">
                        <ul class="slidelist" style="list-style: none;">
          
                            <li class="slideitem" style="list-style: none; text-align: center">
                                <img class="example" src="http://intellisys.co.kr/images/voucher/example_1.png" style="width: 100%;">
                            </li>
                        
                            <li class="slideitem" style="list-style: none; text-align: center">
                                <img class="example" src="http://intellisys.co.kr/images/voucher/example_2.png" style="width: 100%;">
                            </li>
                        
                            <li class="slideitem" style="list-style: none; text-align: center">
                                <img class="example" src="http://intellisys.co.kr/images/voucher/example_3.png" style="width: 100%;">
                            </li>
                        
                            <li class="slideitem" style="list-style: none; text-align: center">
                                <img class="example" src="http://intellisys.co.kr/images/voucher/example_4.png" style="width: 100%;">
                            </li>
                        
                            <li class="slideitem" style="list-style: none; text-align: center">
                                <img class="example" src="http://intellisys.co.kr/images/voucher/example_5.png" style="width: 100%;">
                            </li>
          
                        </ul>
                        <div class="slide-control">
          
                            <div class="control01">
              
                                <label class="next" for="slide02">
                                    <img class="next_icon" src="http://intellisys.co.kr/images/voucher/next.png">
                                </label>
              
                             </div>
          
                            <div class="control02">
              
                                <label class="prev" for="slide01">
                                <img class="prev_icon" src="http://intellisys.co.kr/images/voucher/prev.png">
                                </label>
                                <label class="next" for="slide03">
                                <img class="next_icon" src="http://intellisys.co.kr/images/voucher/next.png">
                                </label>
              
                            </div>
          
                            <div class="control03">
                            
                                <label class="prev" for="slide02">
                                <img class="prev_icon" src="http://intellisys.co.kr/images/voucher/prev.png">
                                </label>
                                <label class="next" for="slide04">
                                <img class="next_icon" src="http://intellisys.co.kr/images/voucher/next.png">
                                </label>
                            
                            </div>
          
                            <div class="control04">
                            
                                <label class="prev" for="slide03">
                                <img class="prev_icon" src="http://intellisys.co.kr/images/voucher/prev.png">
                                </label>
                                <label class="next" for="slide05">
                                <img class="next_icon" src="http://intellisys.co.kr/images/voucher/next.png">
                                </label>
                            
                            </div>
          
                            <div class="control05">
                            
                                <label class="prev" for="slide04">
                                <img class="prev_icon" src="http://intellisys.co.kr/images/voucher/prev.png">
                                </label>
                            
                            </div>
          
                    </div>
                    <div class="progress" style="width: max-content; margin: 0 auto">
                    
                        <span id="progress01" style="display:inline-block; border-radius: 100%; width: 10px; height: 10px; background-color: #9b9998"></span>
                    
                        <span id="progress02" style="display:inline-block; border-radius: 100%; width: 10px; height: 10px; background-color: #9b9998"></span>
                    
                        <span id="progress03" style="display:inline-block; border-radius: 100%; width: 10px; height: 10px; background-color: #9b9998"></span>
                    
                        <span id="progress04" style="display:inline-block; border-radius: 100%; width: 10px; height: 10px; background-color: #9b9998"></span>
                    
                        <span id="progress05" style="display:inline-block; border-radius: 100%; width: 10px; height: 10px; background-color: #9b9998"></span>
                    
                    </div>
                </div>
            </div>

      
            <div class="sec-title show" style="border-bottom: none; opacity: 1; animation: none; transform: none">
            <h3 style="font-size: 30px; font-family: 'GmarketSansBold', 'Noto Sans KR'">
            추진일정
            </h3>
            
            </div>

            <div style="text-align: center;">
            <img class="process" src="http://intellisys.co.kr/images/voucher/process.png">
            </div>

    
            <div class="sec-title show" style="border-bottom: none; opacity: 1; animation: none; transform: none">
            <h3 style="font-size: 30px; font-family: 'GmarketSansBold', 'Noto Sans KR'">
                추진체계
            </h3>
            
            </div>

            <div style="text-align: center;">
                <img object-fit="cover" class="entity" src="http://intellisys.co.kr/images/voucher/entity.png">
            </div>
        </div>
    </div>
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
    name: 'AIb',
    methods:{
        click(){
            alert("버튼을 클릭했습니다.")
        }
    }
}
</script>

<style scoped>

.slidebox .slidelist {
    position: relative;
    white-space: nowrap;
    font-size: 0;
    overflow: hidden;
}

ul {
    margin: 0;
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;

}

*{
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

div{
display:block;
}


.ButtonM{
    width: max-content;
    position: absolute;
    bottom: 40px;
    left: 70px;
}
.AIimage{
    
    background: cover;
    max-width: 100%;
    height : 545px;
    position: relative;
    margin-top: 80px;
}

.voucher-btn{
    height: 3rem;
    background-color: #c8161f;
    color: white;
    border-radius: 50px;
    text-align: center;
    user-select: none;
    white-space: nowrap;
    width: 10rem;
    font-size: 1.2rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    font-weight: 800;
}

.slide-control [class*="control"] {
    display: none;
}

.slidebox .slide-control [class*="control"] label.next {
    right: -50px;
}
.slidebox .slide-control [class*="control"] label {
    position: absolute;
    z-index: 10;
    top: 60%;
    transform: translateY(-50%);
    padding: 20px;
    border-radius: 50%;
    cursor: pointer;
}

.next_icon {
    width: 35px;
    height: 35px;
}

.prev_icon {
    width: 35px;
    height: 35px;
}

#slide05:checked ~ .progress #progress05 {
    background-color: purple !important;
}

button{
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    padding-block: 1px;
    padding-inline: 6px;
}

.content{
    position: relative;
    z-index: 0;
}

#container{
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

}

.sec-inner {
    max-width: 1440px;
    width: 100%;
    height: calc(100% + 80px);
    margin: 0 auto;
}
@media (max-width: 1920px){
.sec-title h3 {
    min-width:394px;
    font-weight:700;
    color: black;
}}

.sec-title h3 {
    font-size: 50px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    color: #000;
    min-width: 515px;
}

h3{
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

.sec-title {
    padding: 70px 0;
    display: flex;
    border-bottom: 1px solid #f1f1f1;
    opacity: 0;
    visibility: visible;
    transform: translateY(40px);
}

.slidebox{
    margin: 0 auto;
    margin-bottom: 20px;
    position: relative;
}

[name="slide"] {
    display: none;
}
input {
    border-radius: 0;
}

input, textarea, button, select {
    border: none;
    background: none;
    outline: none;
    border-radius: 0;
}
input[type="radio" i] {
    background-color: initial;
    cursor: default;
    appearance: auto;
    box-sizing: border-box;
    margin: 3px 3px 0px 5px;
    padding: initial;
    border: initial;
}

#slide05:checked ~ .slidelist .slideitem {
    left: -400%;
}

.slidebox .slidelist .slideitem {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    background-color: #fff;
    width: 100%;
    transition: all 1s;
}

slidebox .slidelist {
    position: relative;
    white-space: nowrap;
    font-size: 0;
    overflow: hidden;
}

@media (max-width: 1600px){
img.example {
    width: 80%;
    object-fit: contain;
    margin-bottom: 3%;
}
}

img {
    overflow-clip-margin: content-box;
    overflow: clip;
}
.sec-title.show {
    animation: fadeIn-up 0.75s ease forwards;
}

@media (max-width: 1600px){
img.process {
    width: 60%;
    object-fit: cover;
    margin-bottom: 3%;
}}
img.process {
    width: 70%;
    object-fit: cover;
    margin-bottom: 3%;
}

@media (max-width: 1600px){
img.entity {
    width: 65%;
    object-fit: contain;
    margin-bottom: 3%;
}}
img.entity {
    width: 75%;
    object-fit: contain;
    margin-bottom: 3%;
}

@media (max-width: 1920px){
#ai-voucher-top-img {
    height: 545px;
    position: relative;
}}

@media (max-width: 1600px){
.ai-voucher.page-visual {
    background: url(http://intellisys.co.kr/images/voucher/banner.jpg);
    background-size: cover;
    margin-top: 80px;
}}
.ai-voucher.page-visual {
    background: url(http://intellisys.co.kr/images/voucher/banner.jpg) no-repeat center / cover;
    margin-top: 80px;
}
@media (max-width: 1920px){
.page-visual {
    height: 612px;
}}
.page-visual {
    height: 800px;
}

</style>