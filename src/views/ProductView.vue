<template>
  <NavBar/>
    <body class="body">
      
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
       <div class="card-footer text-body-secondary d-flex">
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
    ProdID: this.$route.query.ProdID,
    name: this.$route.query.name,
    ProdUrl: this.$route.query.picture,
    category: this.$route.query.category,
    Brand: this.$route.query.Brand,
    price: this.$route.query.price,
  };

  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingProductIndex = cart.findIndex((item) => item.ProdID === product.ProdID);

  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
},


  },
  }
 </script>
 
 <style scoped>
 @import url("https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Monoton&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cinzel&display=swap");

 .btn{
   background-color: black;
   color: #fffdf7;
   
 }

 .card-img-top {
  width: 13rem;
 }

 body {
  margin: 0;
  padding: 0;
    background-color: 
    black !important;
    font-family: "Cinzel", serif;

 }

 .body {
  padding: 5rem;
 }

 span,h5 {
  color: white;
 }

 .card {
  margin: 6rem;
  margin-left: 24rem;
  margin-top: 3.5rem;
  padding-top: 8em;
  position: relative !important;
  top: 40% !important;
  width: 45rem !important;
  background-color: rgb(0, 0, 0);
  display: flex !important;
  flex-direction: row;
  gap: 9rem;

 }

 .card-body {
  margin-bottom: 7rem;
 }


 .btn {
  background-color: white;
  color: black;
  margin-left: 0.4rem;
  height: 2rem;
  width: 8rem;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem !important;
 }

 .btn:hover {
  transition: 0.5s;
  background-color: black;
  color: rgb(255, 255, 255);
  box-shadow: 0 0 7px white
 }

 @media only screen and (max-width: 300px) {
  .card {
  margin: 0rem;
  margin-left: 0rem;
  margin-top: 3.5rem;
  padding-top: 0em;
  position: relative !important;
  top: 0% !important;
  width: 100% !important;
  background-color: rgb(15, 15, 15);
  display: flex !important;
  flex-direction: column;
  gap: 0rem;
  }

  .card-body {
  margin-bottom: 0rem;
 }
 .card-img-top {
  width: 13rem;
 }
 .body {
  padding: 0rem;
 }

 .btn {
  font-size: 0.8rem !important;
 }
 }
 </style>