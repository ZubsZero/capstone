<template>
  <navbar />
  <hero />
  <div class="products">
    <h1 class="h1">Products</h1>
    <addproduct />
    <div class="table-container">
      <table class="responsive-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product URL</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.ProdID">
            <td>{{ product.ProdID }}</td>
            <td>
              <img :src="product.ProdUrl" :alt="product.prodName" class="img" />
            </td>
            <td>{{ product.ProdName }}</td>
            <td>{{ product.quantity }}</td>
            <td>R {{ product.Price }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.Brand }}</td>

            <td>
              <div class="btns">
                <button @click="deleteProduct(product.ProdID)" class="delete">
                  Delete
                </button>
                <router-link class="edit" :to="{ name: 'Edit', params: { id: product.ProdID } }"><button class="delete">Edit</button></router-link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="users">
    <h1 class="h1">Users</h1>
    <div class="user-cards">
      <div class="user-card" v-for="user in users" :key="user.UserID">
        <img
          src="https://i.postimg.cc/mrpKtmZG/Screenshot-2023-09-07-124437-removebg-preview.png"
          alt=""
          class="image"
        />
        <div class="user-info">
          <h5>{{ user.FirstName }}</h5>
          <h5>{{ user.LastName }}</h5>
          <h5>{{ user.UserName }}</h5>
          <h5>{{ user.email }}</h5>
        </div>
        <div class="user-btns">
          <button @click="deleteUser(user.UserID)" class="user-del">
            Delete
          </button>
          <router-link class="edit" :to="{ name: 'User', params: { id: user.UserID } }"><button class="delete">Edit</button></router-link>

        </div>
      </div>
    </div>
  </div>
  <foot />
</template>
<script>
import navbar from "@/components/Navbar-comp.vue";
import addproduct from "@/components/AddProduct.vue";
import foot from '@/components/footer-comp.vue';
import hero from "@/components/adminhero.vue";
export default {
  components: {
    navbar,
    hero,
    addproduct,
    foot
  },
  data() {
    return {
      products: [],
    };
  },

   computed: {
      products() {
        return this.$store.state.products;
      },
      users(){
          return this.$store.state.users;
      }
    },
    mounted() {
      this.$store.dispatch("fetchProducts");
      this.$store.dispatch("fetchUsers");
    },
    methods: {
       deleteProduct(ProdID) {
        this.$store.dispatch("ProdDeleted", ProdID)
      },

      deleteUser(userID) {
          this.$store.dispatch('UserDeleted', userID)
      }
     }
    }

</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Monoton&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cinzel&display=swap");

.edit {
  text-decoration: none;
}

.user-card {
  background-color: rgb(0, 0, 0);
  width: 24rem;
  height: 24rem;
  border: 1px solid white;
}

.user-cards {
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  margin-top: 1rem;
}

.user-info {
  color: white;
  font-family: "Cinzel", serif;
  font-size: 1rem;
}
.delete {
  width: 5rem;
  background-color: black;
  color: white;
  height: 3rem;
  font-family: "Cinzel", serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-del {
  width: 5rem;
  background-color: black;
  color: white;
  height: 3rem;
  font-family: "Cinzel", serif;
 
}
.image {
  width: 12rem;
  height: 10rem;
}

.delete:hover , .user-del:hover{
  transition: 0.5s;
  background-color: white;
  box-shadow: 0 0 10px white;
  color: black;
}

.btns {
  display: flex;
  flex-direction: column;
}
.img {
  width: 12rem;
  height: 12rem;
}

.hh1 {
  color: black;
}

table {
  width: 100%;
}
.table-container {
  margin-top: 3rem;
  width: 100%;
}
tr {
  background-color: black;
  border: 3px solid black;
  width: 100%;
}

td {
  color: white;
  border: 3px solid black;
  font-family: "Cinzel", serif;
}

.user-btns {
  display: flex;
  align-items: center;
  justify-content: center;
}

th {
  color: white;
  border: 3px solid black;
  font-family: "Cinzel", serif;
}

h1 {
  color: white;
  font-size: 3rem;
  border-left: 3px solid black;
  font-family: "Monoton", cursive;
}

@media only screen and (max-width: 768px) {
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  h1 {
    color: white;
    font-size: 1.9rem;
    border-left: 3px solid black;
    font-family: "Monoton", cursive;
  }

  .table-container,
  table {
    overflow-x: auto;
  }

  th,
  td {
    padding: 0.5rem;
  }
}
</style>