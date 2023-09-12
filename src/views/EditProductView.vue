<template>
    <div>
      <div class="edit-Div">
        <h1 class="h1">Edit</h1>
        <router-link to="/admin" class="head">Back</router-link>
        <form @submit.prevent="editProduct" class="edit-form">
          <input type="text" v-model="edit.ProdName" placeholder="Name">
          <input type="number" v-model="edit.quantity" placeholder="Quantity">
          <input type="number" v-model="edit.Price" placeholder="Amount">
          <input type="text" v-model="edit.category" placeholder="Category">
          <input type="text" v-model="edit.ProdUrl" placeholder="Image URL">
          <button type="submit" class="btn">Save</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      edit: {
        prodID: this.id,
        ProdName: "",
        quantity: "",
        Price: "",
        category: "",
        ProdUrl: ""
      }
    };
  },
  props: ["id"],
  methods: {
    editProduct() {
      this.$store
        .dispatch("saveEdit", this.edit)
        .then(() => {
          // this.$router.push("/admin");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }
};
  </script>
  
  <style scoped>
  .h1 {
    color: #ffffff;
  }
  
  .head {
    color: #ffffff;
  }
  
  .btn {
    color: #ffffff;
  }

  body {
    background-color: black;
  }
  </style>
  