<template>
  <NavBar/>
    <body>
     <div class="card" style="width: 25rem;">
      <div class="flex">

        <img :src="$route.query.picture" class="card-img-top" alt="...">

      </div>
         <div class="card-body">
           <h5 class="card-title">{{ $route.query.name }}</h5>
           <p class="card-text">
         <span>{{$route.query.category }}</span>
         <span>{{$route.query.Brand }}</span>

       </p>
       <p class="card-text">
         <span> R{{ $route.query.price }}</span>
       </p>
       <div class="card-footer text-body-secondary">
         <router-link to="/products" class="btn">Back</router-link>
         <button class="btn" type="button" @click="addToCart()">Add To Cart</button>
         </div>
       </div>
     </div>
    </body>
    <Footer/>
 </template>
 
 <script>
 import NavBar from '../components/Navbar-comp.vue'
 import Footer from '../components/footer-comp.vue'
   export default {
    components: {
      NavBar,
      Footer
    },
    data: () => {
    return {
      cart: []
    }},
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted(){
    const ProdID = this.$route.params.ProdID;
    this.$store.dispatch('fetchProduct', this.$route.params.ProdID)
  },

  methods: {
    addToCart() {
      const product = {
        id: this.$route.query.id,
        name: this.$route.query.name,
        ProdUrl: this.$route.query.picture,
        category: this.$route.query.category,
        Brand: this.$route.query.Brand,
        price: this.$route.query.price,
      };

      const data = JSON.parse(localStorage.getItem('cart')) || [];
      data.push(product);
      localStorage.setItem('cart', JSON.stringify(data));
    },
  },
  }
 </script>
 
 <style scoped>
 .btn{
   background-color: black;
   color: #fffdf7;
   
 }

 body {
  margin: 0;
  padding: 0;
    background-color: 
    black !important;
 }

 .card {
  margin-left: 35rem;
  margin-top: 3.5rem;
  width: 30rem ;
  display: fle;
 }
 </style>