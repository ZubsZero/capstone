<template>
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
      return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  methods: {
    removeFromCart(product_id) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  console.log('Cart:', cart);

  const updatedCart = cart.filter((item) => item.ProdID !== product_id);
  console.log('Updated Cart:', updatedCart);

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
