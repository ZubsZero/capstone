<template>
    <nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">WatchTime</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <router-link to="/home" class="nav-link active" aria-current="page" href="#">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" href="#">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link" href="#">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" href="#">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin" class="nav-link" href="#">Admin</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link" href="#">Cart</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</template>
<script>

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');
.navbar.bg-body-tertiary.fixed-top {
    background-color: black !important ;
}

.navbar-brand {
    color: rgb(255, 255, 255) !important;
    font-family: 'Cinzel', serif;
}

.nav-link {
    color: rgb(255, 255, 255) !important;
    font-family: 'Cinzel', serif !important;
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
  font-family: 'Cinzel', serif;
    color: rgb(255, 255, 255) !important;
}
</style>