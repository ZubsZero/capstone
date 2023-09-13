<template>
    <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">WatchTime</h1>
    <p>They say time flies where and who you spend it with so spend on time with us.</p>
  </div>
  <div class="img">
    <img src="https://i.postimg.cc/13JbgRH1/wp2168291-wrist-watches-wallpapers.jpg" alt="img" class="image">
  </div>
</div>
</template>
<script>

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');

.jumbotron {
    background-color: black;
    color: white;
    height: 37rem;
    display: flex;

}

.image {
height: 38.3rem;
}
.container {
    position: relative;
    top: 40%;
    border-left:5px solid rgb(255, 255, 255) ;
    left: 5%;
    width: 40rem;
    height: 12rem;
}


.display-4 {
    font-family: 'Cinzel', serif;
    color: rgb(255, 255, 255);
    font-size: 6rem ;
}

p {
  color:rgb(255, 255, 255);
  font-size: 1.1rem;
  font-family: 'Cinzel', serif;

}

@media only screen and (max-width: 300px) {
  .display-4 {
    font-family: 'Cinzel', serif;
    color: rgb(255, 255, 255);
    font-size: 2.4rem ;
    position: relative;
    top: 20% ;

}
.container {
    border-left:5px solid rgb(255, 255, 255) ;
    width: 100%;
    height: 11rem;
    left: 0%;
   
    
}
.jumbotron {
    background-color: black;
    color: white;
    height: 17rem;
    display: flex;
    flex-direction: column;
    
}

p {
  margin-top: 3rem;
  font-size: 0.9rem;
}
.image {
  width: 0;
  height: 0;
}


}

</style>