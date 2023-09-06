<template>
    <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="d-block w-100"></div>
      <div class="carousel-caption d-none d-md-block">
        <h5><span class="red">Casio G-Shock</span></h5>
        <p>Water proof and shock resistant perfect for formal wear</p>
      </div>
    </div>
    <div class="carousel-item">
      <div class="d-block w-100 two"></div>
      <div class="carousel-caption d-none d-md-block">
        <h5><span class="red">Fossil</span></h5>
        <p>Aesthetic leather and perfect for formal wear</p>
      </div>
    </div>
    <div class="carousel-item">
      <div class="d-block w-100 three"></div>

      <div class="carousel-caption d-none d-md-block">
        <h5><span class="red">Seiko</span></h5>
        <p>A brand Of luxury perfect for formal and business wear</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>
<script>

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');

.carousel.slide.fade {
    height: 35rem !important;
  
  }


.carousel-item {
    height: 35rem !important;
}

.d-block.w-100 {
    height: 35rem !important;
    background-image: url(https://i.postimg.cc/Gtm0XnNw/wp5433138-g-shock-watch-wallpapers.jpg);
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 1.4rem;
}

.d-block.w-100.two {
    height: 35rem !important;
    background-image: url(https://i.postimg.cc/d1bFtxNz/wallpaperflare-com-wallpaper-4.jpg);
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
}

.d-block.w-100.three {
    height: 35rem !important;
    background-image: url(https://i.postimg.cc/Rh9QcMW9/wp3809279-seiko-wallpapers.jpg);
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
}



.red {
    color: rgb(255, 255, 255);
    font-size: 2rem;
}

h5, p {
    font-family: 'Cinzel', serif;

}
</style>