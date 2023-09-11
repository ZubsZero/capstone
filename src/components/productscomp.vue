<template>
  <div class="sortsearch">
    <div class="searching and products">
      <div class="search">
        <div class="icon">
          <i class="bi bi-search"></i>
        </div>
        <div class="search-bar">
          <label for="search">Search</label>
          <input
            type="text"
            class="type-s"
            placeholder="Name of item"
            v-model="searchInput"
          />
          <button type="submit" class="btn" @click="filterProducts()">
            <i class="bi bi-search"></i>
          </button>
        </div>
      </div>

      <div class="products-container">
        <div
          class="products-card"
          v-for="product in products"
          :key="product.ProdID"
          :product="product"
        >
          <div class="image">
            <img :src="product.ProdUrl" alt="" class="img" />
          </div>
          <div class="products-info">
            <h4 class="h4">{{ product.ProdName }}</h4>
            <h4 class="h4">R {{ product.Price }}</h4>
            <h4 class="h4">{{ product.Brand }}</h4>
            <div class="products-btn">
              <button class="view-more">
                <router-link
                  class="single"
                  :to="{
                    name: 'product',
                    params: { ProdID: product.ProdID },
                    query: {
                      name: product.ProdName,
                      price: product.Price,
                      category: product.category,
                      picture: product.ProdUrl,
                      brand: product.Brand,
                    }
                  }"
                >
                  View More
                </router-link>
              </button>
              <button type="button" class="addtocart">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sort-section">
      <div class="sort-body">
        <div class="sort-info">
          <div class="category">
            <label for="category" class="label">Category</label>
            <select name="category" id="category" class="category">
              <option value="Formal">Formal</option>
              <option value="Casual">Casual</option>
            </select>
          </div>
          <div class="brand">
            <label for="brand" class="label">Brand </label>
            <select name="brand" id="brand" class="brand">
              <option value="Casio">Casio</option>
              <option value="Fossil">Fossil</option>
              <option value="Seiko">Seiko</option>
              <option value="Tag Heuer">Tag Heuer</option>
            </select>
          </div>
          <div class="price">
            <label for="price" class="label">Price</label>
            <select name="price" id="price">
              <option value="Lowest">Lowest</option>
              <option value="Highest">Highest</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cinzel&display=swap");

.search {
  display: flex;
  font-weight: bold;
  margin-bottom: 1rem;
  gap: 1rem;
  color: white;
  margin-left: 26rem;
  font-family: "Cinzel", serif;
}

.searching {
  display: flex;
  flex-direction: column;
}

.sortsearch {
  display: flex;
  gap: 14rem;
}

.sort-body {
  margin-top: 5.4rem;
  color: white;
  background-color: rgb(0, 0, 0);
  height: 17rem;
  width: 20rem;
  border: 1px solid white;
}

.icon {
  width: 1.4rem;
  margin-top: 0.5rem;
}

.btn,
input {
  background-color: white;
  margin-left: 1rem;
}

input {
  border-radius: 0.4rem;
}

.label {
  font-family: "Cinzel", serif;
  position: relative;
  right: 10%;
}

option {
  font-family: "Cinzel", serif;
  background-color: black;
  color: white;
}

select {
  font-family: "Cinzel", serif;
}

.sort-info {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  top: 20%;
}
.btn:hover {
  transition: 0.5s;
  background-color: black;
  color: white;
  box-shadow: 0 0 4px white;
}

/* cards */

.products-container {
  position: relative;
  left: 16%;
  margin: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
}
.products-card {
  background-color: rgb(0, 0, 0);
  border: 1px solid white;
  width: 16rem;
  height: 15rem;
}

.products-info {
  position: relative;
  bottom: 100%;
  height: 15rem;
  width: 16rem;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.products-card:hover .image {
  transition: 0.5s;
  transform: scale(1.1);
  filter: brightness(0.25);
}

.products-card:hover .image {
  transition: 0.5s;
  transform: scale(1.1);
  filter: brightness(0.25);
}

.products-card:hover .products-info {
  opacity: 1;
}
.card3:hover .card-info {
  opacity: 1;
}
.card4:hover .card-info {
  opacity: 1;
}
.card1:hover .card-info {
  opacity: 1;
}

.img {
  width: 12rem;
  height: 13rem;
  margin: 1rem;
}

.h4 {
  color: white;
  font-family: "Cinzel", serif;
}

.view-more {
  background-color: rgb(255, 255, 255);
  color: black;
  font-family: "Cinzel", serif;
  border: none;
}

.view-more:hover {
  transition: 0.5s;
  background-color: black;
  border: 0.3px solid rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  box-shadow: 0 0 5px golden rod;
}

.addtocart {
  border: none;
  margin-left: 0.3rem;
  background-color: rgb(255, 255, 255);
  color: black;
  font-family: "Cinzel", serif;
}

.addtocart:hover {
  transition: 0.5s;
  background-color: black;
  border: 0.3px solid rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  box-shadow: 0 0 5px golden rod;
}
</style>
