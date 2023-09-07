<template>
    <navbar/>
    <hero/>
    <productscomp/>
    
</template>
<script>
import hero from '@/components/productshero.vue'
import navbar from '@/components/Navbar-comp.vue'
import productscomp from '@/components/productscomp.vue'
export default {
    name: "products",
    components: {hero, navbar,productscomp}
}
</script>