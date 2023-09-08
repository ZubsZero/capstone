<template>
    <navbar/>
    <hero/>
    <productscomp/>
    <foot/>
</template>
<script>
import hero from '@/components/productshero.vue'
import navbar from '@/components/Navbar-comp.vue'
import productscomp from '@/components/productscomp.vue'
import foot from '@/components/footer-comp.vue'

export default {
    name: "products",
    components: {hero, navbar,productscomp,foot}
}
</script>