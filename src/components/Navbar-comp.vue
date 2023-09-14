<template>
  <nav class="navbar bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">WatchTime</a>
      <div class="user">
        <div class="img">
          <img
            src="https://i.postimg.cc/mrpKtmZG/Screenshot-2023-09-07-124437-removebg-preview.png"
            alt=""
            class="defaultimg"
          />
        </div>
        <div class="username">
          <span>{{ $store.state.user?.Firstname }}</span>
        </div>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link to="/home" class="nav-link active text-white"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link"
                >Products</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/profileview" class="nav-link"
                >View Profile</router-link
              >
            </li>
            <li class="nav-item" v-if="isAdmin !== null && isAdmin">
              <router-link to="/admin" class="nav-link">Admin</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cart" class="nav-link">Cart</router-link>
            </li>
            <div class="btns" v-if="!SignedIn">
              <router-link to="/register" class="sign">
                <button class="sign-up">Sign-Up</button>
              </router-link>
              <router-link to="/login" class="log">
                <button class="login">Login</button>
              </router-link>
            </div>
            <div class="else" v-else>
              <button @click="logout" class="logout">Log out</button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    userRole() {
      const user = this.$store.state.user;
      return user ? user.UserRole : null;
    },
    isAdmin() {
      return this.userRole === "admin";
    },
    SignedIn() {
      const userData = localStorage.getItem("user");
      return !!userData;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
  created() {
    const saveData = localStorage.getItem("user");
    if (saveData) {
      this.user = JSON.parse(saveData);
    }
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      this.$store.commit("setUser", data);
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      this.$store.commit("setUser", null);
      this.$router.push("/login");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cinzel&display=swap");
.navbar.bg-body-tertiary.fixed-top {
  background-color: black !important ;
}

.navbar-brand {
  color: rgb(255, 255, 255) !important;
  font-family: "Cinzel", serif;
}

.logout {
  width: 5rem;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  height: 3rem;
  font-family: "Cinzel", serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8.5rem;
  margin-top: 1rem;
}

nav {
  color: #ffffff !important;
}

.defaultimg {
  width: 3rem;
}

.user {
  display: flex;
}

.username {
  margin-top: 0.5rem;
}

.btns {
  margin-top: 2rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
}

.nav-link {
  color: rgb(255, 255, 255);
  text-decoration: none;
  position: relative;
  font-size: 0.9rem;
  font-family: "Cinzel", serif;
  margin-top: 0.5rem;
}
.login,
.sign-up {
  width: 5rem;
  background-color: black;
  color: white;
  height: 3rem;
  font-family: "Cinzel", serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login:hover,
.sign-up:hover,
.logout:hover {
  transition: 0.5s;
  background-color: white;
  box-shadow: 0 0 10px white;
  color: black;
}

.nav-link.active {
  color: white;
}

.nav-item {
  color: white;
}
.sign,
.log {
  text-decoration: none;
}

.nav-link:after {
  content: "";
  position: absolute;
  background-color: #ffffff;
  height: 4px;
  width: 0;
  left: 0px;
  bottom: -9px;
  transition: 0.3s;
}

.nav-item {
  color: white !important;
}

.nav-link:hover {
  color: #ffffff;
}
.nav-link:hover:after {
  width: 100%;
}

.btn-close {
  background-color: rgb(255, 255, 255) !important;
}

.navbar-toggler {
  background-color: rgb(255, 255, 255) !important;
  border-radius: 12% !important;
}

.offcanvas-body {
  background-color: black;
}

.offcanvas-header {
  background-color: black !important;
}

.offcanvas-title {
  font-family: "Cinzel", serif;
  color: rgb(255, 255, 255) !important;
}

@media only screen and (max-width: 300px) {
  .navbar-brand {
    font-family: "Cinzel", serif;
    color: rgb(255, 255, 255) !important;
    display: none;
  }
  .logout {
  width: 5rem;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  height: 3rem;
  font-family: "Cinzel", serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5.5rem;
  margin-top: 1rem;
}
  
}
</style>
