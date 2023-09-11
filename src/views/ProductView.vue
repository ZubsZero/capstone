<template>
    <body>
     <div class="card" style="width: 18rem;">
         <img :src="$route.query.picture" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">{{ $route.query.name }}</h5>
           <p class="card-text">
         <span>{{$route.query.category }}</span>
       </p>
       <p class="card-text">
         <span> R{{ $route.query.price }}</span>
       </p>
       <div class="card-footer text-body-secondary">
         <router-link to="/products" class="btn">Back</router-link>
         <router-link to="/checkout" class="btn">Add To Cart</router-link>
         </div>
       </div>
     </div>
    </body>
 </template>
 
 <script>
   export default {
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted(){
    this.$store.dispatch('fetchProduct', this.$route.params.ProdID)
  },
};
 </script>
 
 <style scoped>
 .btn{
   background-color: black;
   color: #fffdf7;
   
 }

 html {
    background-color: 
    black !important;
 }
 </style>