<template>
  <div>
    <Navbar>

    </Navbar>
    <main>
        <div class="title">
            <h3> 찾아오시는 길 </h3>
        </div>
        <div class="ic">
            <img src="~/static/map.png">
        </div>
        <div class="letter">
            <h3 style="font-size: 21px; font-weight: 300;">
                <span class="highlight">
                    주소
                </span>
                  서울 관악구 관악로 1, 138동 111, 112, 113 호
                <br>
                <br>
                <span class="highlight">
                    이메일
                </span>
                  contact@intellisys.co.kr
            </h3>

        </div>
        <Footer/>
    </main>

    
  </div>
</template>

<script>
export default {

}
</script>

<style>
.title{
    margin-top: 7vh;
    margin-bottom: 5vh;
    padding-left: 20.6%;
    
}
.letter{
    margin-top: 2vh;
    margin-bottom: 5vh;
    padding-left: 20.6%;
}

.title h3{
    font-weight: 600;
    font-size: xx-large;
}

.ic{
    width:100%;
    text-align: center;
    margin-bottom: 30px;
}

.ic img{
    width:auto;
    height: 800px;
}

.highlight{
    font-weight: 600;
}
</style>