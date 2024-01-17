<template>
    <footer class="site-footer">
      <div class="footer-content">
        <div class="fot-bottom">
          <img src="http://intellisys.co.kr/images/common/logo-gray.png" alt="logo-gray">
          <div class="fot-content">
            <ul class="pc">
                    <li> (주)인텔리시스  </li>
                    <li> 대표이사 : 박은영  </li>
                    <li> 서울 관악구 관악로 1, 138동 111, 112, 113 호 </li>
              </ul>
            <ul class = "pc">
                  <li> 사업자등록번호 329-81-00803 </li>
                  <li> 문의 contact@intellisys.co.kr  </li>
            </ul>
            <p class="copy" style="margin:auto;padding-left: 40px;font-weight: 500;">Copyright©2024 IntelliSys</p>   

          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    
  };
  </script>
  
  <style scoped>

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

div{
  display: block;
}

.footer-content{
  max-width: 1024px;
  margin:0 auto;
}

.fot-bottom .fot-content li {
    font-size: 15px;
    font-family: "Noto Sans Kr";
    font-weight: 500;
    color: #525252;
    line-height: 22px;
    display: inline-flex;
    align-items: center;
}

.fot-bottom .fot-content p.copy {
    font-size: 15px;
    font-family: "Noto Sans Kr";
    font-weight: 300;
    color: #525252;
    line-height: 22px;
    margin-top: 30px;
}
.fot-bottom .fot-content ul:first-child {
    margin-top: 0px;
}

.fot-bottom .fot-content ul {
    display: flex;
    align-items: center;
    margin-top: 5px;
}
ul {
    list-style: none;
}

.pc li:not(:last-child)::after {
  content: "|";
  margin: 0 0.5em; 
  color: #000;
}

.fot-bottom img{
  height: 34px;
  margin-right: 47px;
}

img {
    overflow-clip-margin: content-box;
    overflow: clip;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.fot-bottom{
  display: flex;
  padding-bottom: 96px;
  padding-top: 35px;
}

footer{
  background-color: white;
  border-top: 1px solid #dfe1e2;
}


  </style>
  