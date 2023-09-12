<template>
    <NavBar/>
    <div>
      <div>
        <h1 class="text-center p-3 heading-text text-white">My Account</h1>
        <div class="card mx-auto my-3 p-5 w-75 user-card">
          <div class="m-3 text-center">
            <img src="https://i.postimg.cc/mrpKtmZG/Screenshot-2023-09-07-124437-removebg-preview.png" :alt="$store.state.user?.Firstname" class="img-fluid mb-5"
              style="max-width: 60%; border-radius: 50%;" />
            <h2 class="gold-text">
              {{ $store.state.user?.Firstname }} {{ $store.state.user?.Lastname }}
            </h2>
            <cite>{{ $store.state.user?.UserRole }}</cite>
          </div>
          <div>
            <div class="card mb-5 p-3 info-card">
              <span><strong>User ID: </strong>{{ $store.state.user?.UserID }}</span> <br> <br>
              <span><strong>Email: </strong>{{ $store.state.user?.email }}</span> <br> <br>
            </div>
            <div class="d-flex justify-content-between">
              <update-user-comp class="btn edit-btn" />
              <button type="submit" class="btn del-btn" @click="deleteUser(user.UserID)">Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </template>
  <script>
   import NavBar from '../components/Navbar-comp.vue'
 import Footer from '../components/footer-comp.vue'
  export default{
    components: {
        NavBar,
        Footer
    },
    created() {
      const saveData = localStorage.getItem("user");
      if (saveData) {
        this.user = JSON.parse(saveData)
      }
      const data = JSON.parse(localStorage.getItem("user"));
      if (data) {
        this.$store.commit("setUser", data)
      }
    }
  }
  </script>
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Monoton&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cinzel&display=swap");

  .img-fluid {
    width: 6rem;
  }

  .text-center {
    margin-top: 2rem;
    font-family: "Cinzel", serif;

  }

  span {
    font-family: "Cinzel", serif;

  }
</style>
