<template>
  <router-view/>
</template>
<script>
import foot from './components/footer-comp.vue'
export default {
  name: "App",
  components: {foot}
}
</script>

<style>
#app {
  text-align: center;
  background-color: black;
}



nav a.router-link-exact-active {
  color: #008046;
}




</style>
