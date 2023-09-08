<template>
   <NavBar/>
   <Hero/>
   <carousel/>
   <Body/>
   <foot/>
</template>

<script>
import NavBar from '@/components/Navbar-comp.vue'
import Hero from '@/components/Hero-comp.vue'
import carousel from '@/components/Carousel-comp.vue'
import Body from '@/components/Homebody-comp.vue'
import foot from '@/components/footer-comp.vue'

export default {
  name: "Nav",
  components: {NavBar,Hero, carousel, Body,foot}
}
</script>
