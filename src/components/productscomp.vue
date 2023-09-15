<template>
  <div class="sortsearch">
    <div class="searching-and-products">
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
      
        </div>
      </div>]

      <div class="products-container" v-if="productsList && productsList.length > 0">
        <div
          class="products-card"
          v-for="product in filteredProductList"
          :key="product.ProdID"
        >
          <div class="image">
            <img :src="product.ProdUrl" alt="" class="img" />
          </div>
          <div class="products-info">
            <h4 class="h4">{{ product.ProdName }}</h4>
            <h4 class="h4">R {{ product.Price }}</h4>
            <h4 class="h4">{{ product.Brand }}</h4>
            <h4 class="none">{{ product.quantity }}</h4>
            <div class="products-btn">
              <button class="view-more">
                <router-link
                  class="single"
                  :to="{
                    name: 'product',
                    params: { ProdID: product.ProdID },
                    query: {
                      ProdID: product.ProdID,
                      quantity: product.quantity,
                      name: product.ProdName,
                      price: product.Price,
                      category: product.category,
                      picture: product.ProdUrl,
                      brand: product.Brand,
                    },
                  }"
                >
                  View More
                </router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="else" v-else>
        <spinnerCompVue />
      </div>
    </div>
    <div class="sort-section">
      <div class="sort-body">
        <div class="sort-info">
        
          <div class="brand">
            <label for="brand" class="label">Brand</label>
            <select name="brand" id="brand" class="brand" v-model="selectedBrand" @change="filterProductsByBrand">
              <option value="">All Brands</option>
              <option value="casio">Casio</option>
              <option value="fossil">Fossil</option>
              <option value="seiko">Seiko</option>
              <option value="tag heuer">Tag Heuer</option>
            </select>
          </div>
          <div class="price">
            <label for="price" class="label">Price</label>
            <select
              name="price"
              id="price"
              v-model="selectedSort"
              @change="sortProducts"
            >
              <option value="lowest">Lowest</option>
              <option value="highest">Highest</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import spinnerCompVue from "../components/spinnerComp.vue";

export default {
  components: {
    spinnerCompVue,
  },
  data() {
    return {
      searchInput: "",
      selectedSort: "lowest",
      selectedBrand: "",
    };
  },
  computed: {
    productsList() {
      return this.$store.state.products;
    },
    filteredProductList() {
      const searchQuery = this.searchInput.toLowerCase();
      let filteredList = this.productsList.filter((product) => {
        const productName = product.ProdName.toLowerCase();
        const category = product.category.toLowerCase();
        const brand = product.Brand.toLowerCase();
        return (
          (productName.includes(searchQuery) || category.includes(searchQuery)) &&
          (this.selectedBrand === "" || brand === this.selectedBrand)
        );
      });

      if (this.selectedSort === "lowest") {
        filteredList = filteredList.sort((a, b) => a.Price - b.Price);
      } else if (this.selectedSort === "highest") {
        filteredList = filteredList.sort((a, b) => b.Price - a.Price);
      }

      return filteredList;
    },
  },
  methods: {
    sortProducts() {
    },
    filterProductsByBrand() {
    },
    getBrands() {
      const brandsSet = new Set();
      this.productsList.forEach((product) => {
        brandsSet.add(product.Brand);
      });
      return Array.from(brandsSet);
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

.none {
  content: "";
  font-size: 0rem;
}

.else {
  position: relative;
  top: 30%;
  left: 25%;
}



.single {
  text-decoration: none;
  color: black;
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

.view-more{
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

.single:hover {
  transition: 0.5s;
  background-color: black;
  color: rgb(255, 255, 255);
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

@media only screen and (max-width:300px) {
  .products-container {
  position: relative;
  left: 0%;
  margin: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}
.sortsearch {
  display: flex;
  flex-direction: column-reverse;
  gap: 0rem;
}
.search {
  display: flex;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 1rem;
  gap: 0.1rem;
  color: white;
  margin-left: 0rem;
  font-family: "Cinzel", serif;
}

.type-s {
  width: 11rem;
}

.icon {
  width: 1.4rem;
  margin-top: 0rem;
}

.sort-body {
  margin-top: 5.4rem;
  color: white;
  background-color: rgb(0, 0, 0);
  height: 17rem;
  width: 18.5rem;
  border: 1px solid white;
}

.else {
  margin-right: 9rem;
}

}
</style>
