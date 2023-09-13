<template>
  <div class="shopping-cart">
    <h2>Your Shopping Cart:</h2>
    <ul v-if="cart.length" class="cart-items">
      <li v-for="item in cart" :key="item.ProdID" class="cart-item">
          <img :src="item.key.ProdUrl" style="width: 10rem" alt="">
        {{ item.key.ProdName }} - Price: R{{ item.key.Price }} - Quantity:
        <input
          type="number"
          v-model="item.key.quantity"
          @input="updateQuantity(item)"
          class="quantity-input"
        />
        <button @click="removeFromCart(item.key.ProdID)" class="remove-button">Remove</button>
      </li>
    </ul>
    <p v-else class="empty-cart-message">No items in the cart.</p>
    <p class="cart-total">Total: R{{ number }}</p>
  </div>
</template>
<script>
export default {
  computed: {
    cart() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      return cart;
    },
    cartTotal() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      return cart.reduce((total, item) => total + item.Price * item.quantity, 0);
    },
  },
  methods: {
    removeFromCart(product_id) {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const updatedCart = cart.filter((item) => item.ProdID !== product_id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    },
    updateQuantity(item) {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.ProdID === item.ProdID) {
          cartItem.quantity = item.quantity;
        }
        return cartItem;
      });
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    },
  },
};
</script>
<style scoped>
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
.quantity-input {
  width: 50px;
}
.remove-button {
  background-color: #FF5733;
  color: #fff;
  border: none;
  padding: 1px 10px;
  cursor: pointer;
  width: 5rem;
}
.remove-button:hover {
  background-color: #E5482E;
}
.empty-cart-message {
  font-style: italic;
}
.cart-total {
  font-weight: bold;
  font-size: 1.2rem;
}
</style>