<template>
    <div>
      <navbar/>
      <main>
        <div>
          <div class="ic" style="width: 100%; position: relative">
            <img src="http://intellisys.co.kr/images/sub/visual/visual04-mo.jpg" style="width:100%">
            <div class="text">
            <h3>
              <span style="display: block">
                <img src="http://intellisys.co.kr/images/restory_i/logo.jpg">
  
              </span>
              <br>
              MD, 마케터가 매일 작성하던 제품설명문
              <br>
              이제 GPT가 대신합니다
              <div class="pc" style="margin-top: 20px; width: max-content; color:#FFFFFF; background-color: #c8161f; border-radius: 50px; padding: 2% 10%; text-align: center; cursor: pointer;">
                <p>체험하기</p>
              </div>
            </h3>
            </div>
          </div>
          <div class="content" style="display:flex;margin-top: 7vh">
            <div class="banner" style="width=20%; margin:0 auto; padding-right:20px">
              <img id="restoy_ai_fixed" src="http://intellisys.co.kr/images/restory_i/require.jpg" style=" width: 100%;object-fit: contain; cursor: pointer; position: sticky; top: 69px;">
            </div>
            <div class="real" style="width:80%">

              <div class="cont1">
                <div style="display: flex; margin-bottom: 7vh;">
                  <div style="width: 80%; margin:auto 0;">
                    <h3 id="content-title" class="content-title-pc-0">GPT를 이용한 AI DX Restory.i 로 시작해 보세요</h3>
                    <p id="content-text" class="content-text-pc-0">GPT가 만들어 내는 부정확한 정보!<br>                제품설명문에 그대로 사용하기는 힘듭니다.<br>                멀티 LLM 모델 <span>restory.i</span>는 이커머스에 제품 설명에 꼭 필요한 정확성, 간결성, 최신성을 제공합니다.</p>
                  </div>
                </div>
                <div>
                  <img style="width: 100%;" src="http://intellisys.co.kr/images/restory_i/restory_i_1.jpg">
                  <div id="content-step"></div>
                </div>
              </div>

              <div class="cont2">
                <div style="display: flex; margin-bottom: 7vh;">
                  <div style="width: 80%; margin:auto 0;">
                    <h3 id="content-title" class="content-title-pc-0">제품 설명문 생성 자동화</h3>
                    <p id="content-text" class="content-text-pc-0">   상품 DB 연동 후 판매중인 상품 리스트를 생성합니다.<br>상품 선택 후 '생성하기'를 누르면 헤드라인과 설명문을 3가지씩 창작하여 보여줍니다.       </p>
                  </div>
                </div>
                <div id="ic2" style="width:100%">
                <div style="margin-right: 3vw;">
                  <img style="width:100%;" src="http://intellisys.co.kr/images/restory_i/restory_i_2_1.jpg">
                </div>
                <div>
                  <img style="width:100%;" src="http://intellisys.co.kr/images/restory_i/restory_i_2_2.jpg">
                </div>
                </div>
                <div class="content-step">
                    <div style="display: flex; margin-top: 20px;">
                                    
                                    <div style="display: flex; width: 100%; margin: auto">
                                        <p id="step" style="color: #6F43F5;">01</p>
                                        <p id="step-text" class="content-step-pc-1-0">파일 업로드로 상품 정보 연동 후 상품을 선택합니다</p>
                                    </div>
                                
                                    <div style="display: flex; width: 100%; margin: auto">
                                        <p id="step" style="color: #6F43F5;">02</p>
                                        <p id="step-text" class="content-step-pc-1-1">모델이 자동으로 상품에 맞는 설명문을 생성합니다.</p>
                                    </div>
                                
                                    <div style="display: flex; width: 100%; margin: auto">
                                        <p id="step" style="color: #6F43F5;">03</p>
                                        <p id="step-text" class="content-step-pc-1-2">설명문에 대한 피드백을 통해 점점 더 고도화됩니다.</p>
                                    </div>
                                
                            </div>
                </div>
                
              </div>

              <div class="cont3">
                <div style="display: flex;margin-bottom: 7vh;">
                  <div style="width: 80%; margin:auto 0;">
                    <h3 id="content-title" class="content-title-pc-0">전시 자동화</h3>
                    <p id="content-text" class="content-text-pc-0">   MD/마케터가 RESTORY-I가 수 초 단위로 생성하는 설명 문구 중<br>마음에 드는 결과를 선택하기만 하면 <br>제품 상세페이지에 센스있는 제품설명문을 자동으로 전시 합니다.</p>
                  </div>
                </div>
                <div id="ic2" style="width:100%">
                <div style="margin-right: 3vw;">
                  <img style="width:100%;" src="http://intellisys.co.kr/images/restory_i/restory_i_2_1.jpg">
                </div>
                <div>
                  <img style="width:100%;" src="http://intellisys.co.kr/images/restory_i/restory_i_2_2.jpg">
                </div>
                </div>
                <div class="content-step">
                    <div style="display: flex ;margin-top: 20px;">
                                    
                                    <div style="display: flex; width: 100%; margin: auto">
                                        <p id="step" style="color: #6F43F5;">01</p>
                                        <p id="step-text" class="content-step-pc-1-0">전시할 영역을 선택하고</p>
                                    </div>
                                
                                    <div style="display: flex; width: 100%; margin: auto">
                                        <p id="step" style="color: #6F43F5;">02</p>
                                        <p id="step-text" class="content-step-pc-1-1">적용할 헤드라인과 설명문을 선택하면</p>
                                    </div>
                                
                                    <div style="display: flex; width: 100%; margin: auto">
                                        <p id="step" style="color: #6F43F5;">03</p>
                                        <p id="step-text" class="content-step-pc-1-2">자동으로 쇼핑몰에 결과가 반영됩니다.</p>
                                    </div>
                                
                            </div>
                </div>
                
              </div>


              <div class="cont4" style="margin-bottom: 3vh; text-align: center;">
                <img id="preview_img" src="http://intellisys.co.kr/images/restory_i/restory_i_preview.jpg">
                <h3 id="preview_text" style="padding: 0; color:#6F43F5">"반복적으로 작성하던 제품 설명문 <br class="mo">이제 AI에게 맡겨보세요."</h3>
              </div>
            </div>
  
          </div>
          
        </div>
      </main>
      <Footer/>
    </div>
  </template>
  
  <script>
  export default {
    name: 'IndexPage'
  }
  </script>
  
  <style>
  
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
  
  #content-step{
    margin-top: 6vh;
    margin-bottom: 10vh;
  }
  
  .text{
    position: absolute;
    top:30%;
    left: 8%;
  }
  
#ic2{
    display: flex;
    width:100%;
    
}

#restoy_ai_fixed {
    width: 100%;
    max-width: 268px;
}

#content-title {
    font-size: 22px;
    padding: 25px 0px;
}

#content-text {
    font-size: 18px;
    line-height: 2rem;
    font-family: 'NanumSquareNeo' !important;
    color: #78777D;
}
@media (max-width: 1920px){
.text h3{
font-size: 18px;
line-height: 34px;
font-weight: 500;
color:white;
}}

*:not(a, span) {
    font-family: 'NanumSquareNeo-bold' !important;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

#content-step {
    margin-top: 6vh;
    margin-bottom: 10vh;
}

#step {
    font-size: 26px;
    margin: auto 0;
    margin-right: 24px;
}

#step-text {
    margin: auto 0;
    font-size: 18px;
    line-height: 2rem;
    font-family: 'NanumSquareNeo' !important;
}

#preview_img {
    width: 65%;
}

#preview_text {
    font-size: 22px;
}

  </style>