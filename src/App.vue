<template>
  <div id="app">
    <router-link class="tip" to="/A">A</router-link>|
    <router-link class="tip" to="/B">B</router-link>|
    <router-link class="tip" to="/C">C</router-link>|
    <router-link class="tip" to="/D">D</router-link>
    <router-view class="showbox"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.tip{
  display: inline-block;
  width: 6vw;
  font-size: 5vw;
}
.showbox{
  font-size: 10vw;
  margin: 4vw;
  height: 20vw;
  background: lightgray;
  line-height: 20vw;
}
</style>
