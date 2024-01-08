<template>
  <!--<Tutorial/>-->

  <div id = "app" style="text-align: center; margin: auto; width: max-content;">
    <h2 class="page-title">{{ pageTitle }}</h2>
    {{ count }}
    <button v-on:click="countUp">countup</button>
    <button v-on:click="countDown">countdown</button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  el : '#app',
  data() {
    return {
      count: 0,
      pageTitle: 'click to count up or down'
    }
  },
  head(){
    return{
      title: this.pageTitle
    };

  },
  methods : {
    countUp : function(){
      this.count++
    },
    countDown : function(){
      this.count--
    }
  }
}
</script>

<style>
.page-title {
  color: blue;
  font-size: 24px;
  text-align: center;
}

button {
  margin: 10px;
  padding: 8px 16px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>