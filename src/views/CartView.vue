<template>
    <div>
      <NavBar />
      <div class="container">
        <h1>Your Cart</h1>
        <div v-if="cartItems.length === 0">
          <p>Your cart is empty.</p>
        </div>
        <div v-else>
          <ul>
            <li v-for="item in cartItems" :key="item.id">
              {{ item.name }} - Quantity: {{ item.quantity }} - Price: ${{ item.price }}
            </li>
          </ul>
          <p>Total: ${{ cartTotal }}</p>
          <button @click="checkout">Checkout</button>
        </div>
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import NavBar from '../components/Navbar-comp.vue'
  import Footer from '../components/footer-comp.vue'
  
  export default {
    components: {
      NavBar,
      Footer
    },
    computed: {
      cartItems() {
      
      },
      cartTotal() {
        
      },
    },
    methods: {
      checkout() {
    
      },
    },
  }
  </script>
  
  <style scoped>
  /* Add your cart view styles here */
  </style>
  