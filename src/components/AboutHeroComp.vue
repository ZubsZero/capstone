<template>
    <div class="jumbotron jumbotron-fluid">
<div class="container">
<h1 class="display-4">About Us At WatchTime</h1>
</div>
<div class="img">
<img src="https://i.postimg.cc/Z5NHRsh7/pat-taylor-12-V36-G17-Ib-Q-unsplash.jpg" alt="img" class="image">
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
height: 32rem;
width: 30rem;
margin-right: 10rem;
}
.container {
position: relative;
top: 40%;
border-left:5px solid rgb(255, 255, 255) ;
left: 0%;
width: 30rem;
height: 10rem;
}


.display-4 {
font-family: 'Cinzel', serif;
color: rgb(255, 255, 255);
font-size: 4rem ;
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
font-size: 2rem ;
position: relative;
top: 20% ;

}
.container {
border-left:5px solid rgb(255, 255, 255) ;
width: 18rem;
height: 8rem;


}
.jumbotron {
background-color: black;
color: white;
height: 10rem;
display: flex;
flex-direction: column;

}
.image {
width: 0;
height: 0;
}


}

</style>