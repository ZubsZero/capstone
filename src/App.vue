<template>
  <router-view/>
  <Footercomp/>
</template>
<script>
import Footercomp from './components/footer-comp.vue'
export default {
  name: "App",
  components: {Footercomp}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}


</style>
