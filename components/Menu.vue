<template>
    <body class="main show fp-viewing-0" style="overflow: hidden; height: 100%;">
    <header>
        <h1>
            <a href="http://localhost:3000/">
                <img src="http://intellisys.co.kr/images/common/logo.png" alt="logo" class="white">
                <img src="http://intellisys.co.kr/images/common/logo-purple.png" alt="logo" class="purple">
                <img src="http://intellisys.co.kr/images/common/logo-black.png" alt="logo" class="black">
            </a>
        </h1>
        <style>

        @media all and (max-width:1300px) {
            li>a>span {
                margin-bottom: 2.5% !important;
            }
        }
        </style>
        <nav class="gnb">
            <ul class="gnb-menu">
                <li>
                    <a href="/Company" class="circular-500">company</a>
                </li>
                <li>
                    <a href="/Product" class="circular-500">company</a>
                    <ul class="sub-menu" style="text-transform: none">
                        <li>
                            <a href="/Product">restory.i</a>
                        </li>
                        <li>
                            <a href="/Product">Intelligent Personalization Solution</a>
                        </li>
                        <li>
                            <a href="/Product">AI Fashion Stylist Solution</a>
                        </li>
                    </ul>

                </li>
                <li>
                            <a href="/AIb" class="circular-500">AI <span style="font-weight: 700; margin-left: 7%; width: 61px;">
                                    바우처</span>
                            </a>
                </li>
                <li>
                        <a href="/Blog">blog</a>
                </li>
                <li>
                            <a href="/Contact">contact</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/Contact" class="notoSans">문의하기</a>
                                </li>
                                <li>
                                    <a href="/Contact" class="notoSans">찾아오시는 길</a>
                                </li>
                            </ul>
                </li>
            </ul>
        </nav>
        <div class="header-right">
            <a href="mailto:contact@intellisys.co.kr">
                <i></i>
            </a>
            <button class="hambuger-open-btn">
                <div class="hambuger-span-group">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
        </div>
    </header>
</body>

</template>

<script>
export default {
    name:'Menu'
};

</script>

<style>
header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100000000000000;
    width: 100%;
    height: 80px;
    display: flex !important;
    justify-content: space-between;
    align-items: center;
    transition: 0.3s ease;
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

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

@media (max-width: 1920px){
header h1 {
    margin-left: 115px;
}}

h1{
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

header h1 {
    margin-left: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
}

header h1 a {
    height: 100%;
    display: block;
}
a {
    text-decoration: none;
    color: inherit;
}

img {
    overflow-clip-margin: content-box;
    overflow: clip;
}

.white {
    color: #fff !important;
}

.black {
    color: #171717 !important;
}

header h1 img {
    position: absolute;
    top: 50%;
    width: 96px;
    transform: translateY(-50%);
    opacity: 1;
    transition: 0.3s ease;
}

header h1 .red, header h1 .purple, header h1 .black {
    opacity: 0;
}

@media (max-width: 1920px){
header .gnb, header.sub .gnb {
    max-width: 1024px;
    padding-left: 3px;
}}

header .gnb {
    width: 100%;
    max-width: 1440px;
    position: absolute;
    transform: translateX(-50%);
    top: 0;
    left: 50%;
    height: 100%;
    transition: 0.5s ease;
    opacity: 1;
    visibility: visible;
    padding-left: 0;
}

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
}

header .gnb .gnb-menu {
    height: 100%;
    display: flex;
    align-items: center;
}

ul{
    list-style: none
}

header .gnb .gnb-menu > li {
    height: 100%;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
    transition: 0.3s ease;
    position: relative;
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
}

eader .gnb .gnb-menu li:last-child a {
    padding-right: 0;
}

header .gnb .gnb-menu li:first-child a {
    padding-left: 0;
}
header .gnb .gnb-menu > li > a {
    font-size: 20px;
    font-family: "Circular Std Medium";
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 28.5px;
    font-weight: 700;
}
.circular-500 {
    font-family: "Circular Std Medium",sans-serif !important;
}
a {
    text-decoration: none;
    color: inherit;
}

header .sub-menu {
    position: absolute;
    left: 0;
    background-color: #fff;
    padding: 32px 33px 25px 33px;
    width: max-content;
    opacity: 0;
    visibility: hidden;
    box-shadow: 0px 5px 10px 0 rgba(0, 0, 0, 0.05);
    transition: 0.3s ease;
}

ul ul {
    list-style-type: circle;
    margin-block-start: 0px;
    margin-block-end: 0px;
}

ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}

header .sub-menu a {
    color: #595959;
    font-size: 15px;
    font-family: "Circular Std Book";
    line-height: 21px;
    transition: 0.3s ease;
    margin-bottom: 24px;
    display: flex;
}

.notoSans {
    font-family: 'Noto Sans KR', sans-serif !important;
    font-weight: 600;
}

@media (max-width: 1920px){
.header-right {
    height: 100%;
}}
.header-right {
    display: flex;
}

@media (max-width: 1920px){
.header-right a, .header-right button {
    width: 80px;
    height: 100%;
}}
.header-right a {
    background-color: #fff;
}
.header-right a, .header-right button {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-1px);
}

.header-right a i {
    width: 26px;
    height: 20px;
    background: url(https://cdn-icons-png.flaticon.com/512/6652/6652754.png) no-repeat center / cover;
}
@media (max-width: 1920px){
.header-right a i {
    width: 21px;
    height: 16px;
}}

@media (max-width: 1920px){
.header-right a, .header-right button {
    width: 80px;
    height: 100%;
}}
.header-right button {
    background-color: #1f1247;
}
.header-right a, .header-right button {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-1px);
}
input, textarea, button, select {
    border: none;
    background: none;
    outline: none;
    border-radius: 0;
}
button {
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
}
button {
    appearance: auto;
    
    text-rendering: auto;
    /*color: buttontext;*/
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    box-sizing: border-box;
    /*background-color: buttonface;*/
    margin: 0em;
    padding-block: 1px;
    padding-inline: 6px;
    border-width: 2px;
    border-style: outset;
    border-color: buttonborder;
    border-image: initial;
}

.header-right .hambuger-span-group {
    width: 20px;
    height: 17px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

header .hambuger-span-group span {
    transition: 0.3s ease;
    transform-origin: left center;
}
.header-right button span {
    width: 20px;
    height: 3px;
    background-color: #fff;
}
@media (max-width: 1920px){
.header-right button span {
    width: 100%;
    height: 2px;
}}

.fp-enabled body, html.fp-enabled {
    margin: 0;
    padding: 0;
    overflow: hidden;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
body.show {
    -webkit-animation: fadeIn 1s 0.3s ease forwards;
    animation: fadeIn 1s 0.3s ease forwards;
}
body {
    margin: 0;
}
body {
    line-height: 1;
}

</style>