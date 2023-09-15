<template>
  <NavBar/>
  <div class="shopping-cart">
    <h2>Your Shopping Cart:</h2>
    <ul v-if="cart.length" class="cart-items">
      <li v-for="item in cart" :key="item.ProdID" class="cart-item">
        <img :src="item.ProdUrl" style="width: 10rem" alt="">
        {{ item.name }} - Price: R{{ item.price }} - Quantity:
        <input
          type="number"
          v-model="item.quantity"
          @input="updateQuantity(item)"
          class="quantity-input"
        />
        <button @click="removeFromCart(item.ProdID)" class="remove-button">Remove</button>
      </li>
    </ul>
    <p v-else class="empty-cart-message">No items in the cart.</p>
    <p class="cart-total">Total: R{{ cartTotal }}</p>
  </div>
  <div class="checkout">
    <button class="checkout-btn" @click="checkout">Checkout</button>
  </div>
  <Footer/>
</template>


<script>
import NavBar from '../components/Navbar-comp.vue'
import Footer from '../components/footer-comp.vue'
import sweet from 'sweetalert'

export default {
  components: {
    NavBar,
    Footer
  },
  computed: {
    cart() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      return cart;
    },
    cartTotal() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  methods: {
    removeFromCart(product_id) {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const updatedCart = cart.filter((item) => item.ProdID !== product_id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      window.location.reload();
    },
    updateQuantity(updatedItem) {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const index = cart.findIndex((item) => item.ProdID === updatedItem.ProdID);
      if (index !== -1) {
        cart[index].quantity = updatedItem.quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    },
    checkout() {
      sweet('Success!', 'Items purchased successfully', 'success');

      localStorage.removeItem('cart');
      window.location.reload();
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Monoton&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cinzel&display=swap");

.shopping-cart {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  color: white;
}
.cart-items {
  list-style: none;
  padding: 0;
}
.cart-item {
  margin-bottom: 10px;
}

h2{
  font-family: "Cinzel", serif;

}
.quantity-input {
  width: 50px;
}

.checkout-btn {
  width: 6rem;
  background-color: black;
  color: white;
  height: 3rem;
  font-family: "Cinzel", serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left:45rem ;
}
.remove-button {
  width: 5rem;
  background-color: black;
  color: white;
  height: 3rem;
  font-family: "Cinzel", serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;


}
.remove-button:hover,.checkout-btn:hover {
  transition: 0.5s;
  background-color: white;
  box-shadow: 0 0 10px white;
  color: black;
}
.empty-cart-message {
  font-style: italic;
  font-family: "Cinzel", serif;

}
.cart-total {
  font-weight: bold;
  font-size: 1.2rem;
}

@media only screen and (max-width: 300px) {
  .checkout-btn {
    margin-left:6.4rem ;
    margin-bottom: 1rem;
  }
}
</style>
