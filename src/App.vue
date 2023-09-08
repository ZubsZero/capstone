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
