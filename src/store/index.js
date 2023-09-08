import { createStore } from 'vuex';
import axios from "axios"
const watchtime = "https://watchtime.onrender.com/products"

export default createStore({
  state: {
    product: null,
    products: null,
    user: null,
    users: null,
    orders: null,
    order: null,
    isAuthenticated: false,
    token: null,
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setUser: (state, user) => {
      state.users = user;
    },
    setSpinner(state, products) {
      state.showSpinner = products;
  },
  SET_AUTHENTICATED(state, value) {
    state.isAuthenticated = value
  },
  SET_TOKEN(state, token) {
    state.token = token
  },
},
  actions: {

      async addProduct() {
        try {
          const response = await axios.post(
            "https://watchtime.onrender.com/products",
            this.newProduct
          );
          // Assuming the API returns the newly added product details
          const addedProduct = response.data;
  
          this.newProduct = {
            prodName: "",
            prodUrl: "",
            quantity: 0,
            amount: 0,
            category: "",
          };
  
          this.closeModal();
        } catch (error) {
          console.error("Error adding product:", error);
        }
      },

      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
      },

      async fetchProducts(context) {
        try {
          const response = await axios.get('https://watchtime.onrender.com/products'); 
          const products = response.data;
          context.commit('setProducts', products); 
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      },
      setAuthenticated({ commit }, value) {
        commit("SET_AUTHENTICATED", value)
      },
      setToken({ commit }, token) {
        commit("SET_TOKEN", token)
      },
    }})

    