<template>
    <div class="half">
       <div class="sign-in">
        <div class="img">
            <img src="https://i.postimg.cc/rspSRzHr/pexels-donald-tong-23475.jpg" alt="img" class="image">
        </div>
        <div class="sign-text">
            <h1 class="h1">Welcome To WatchTime</h1>
            <p>Have you not made an account click on sign-up<br> and start your account today</p>
            <div class="buttons">
                <router-link to="/register" class="link"><div class="button">Sign Up</div></router-link>
            </div>
           
        </div> 
    </div>
   
    <div class="log">
        <div class="login-text">
            <h2>Have You already got an account </h2>
            <p>Click on login to redirect you to the login page</p>
            <div class="buttons">
                <div class="button">Log in</div>
            </div>
        </div>
        <div class="image">
            <img src="https://i.postimg.cc/028r0b96/pexels-pratik-prasad-8401620.jpg" alt="img" class="image-2">

        </div>
    </div> 
    </div>
    
</template>
<script>

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');

.half {
    display: flex;
}
.sign-in{
background-color: black;
width: 100%;
height: 44.2rem;
font-family: 'Cinzel', serif;



}
.sign-text {
    color: white;
    position: relative;
    bottom: 10%;
}
.login-text {
    color: rgb(255, 255, 255);
    font-family: 'Cinzel', serif;
    position: relative;
    top: 10%;

}

.image {
    width: 100%;
    
}

.link {
    text-decoration: none;
}
.image-2 {
    height: 35rem;
    object-fit: contain ;
}

.h1 {
    font-size: 3.1rem;
}

p {
    font-size: 1.3rem;
   
}

.button {
    border:none;
    background-color: black;
    color: white;
    border: 1px solid white;
    width: 6rem;
    height: 3rem;
    display: flex;
    align-items: center ;
    justify-content: center;
    border-radius: 6px;
}

.button:hover {
    transition: 0.5s;
    background-color: rgb(255, 255, 255) ;
    color: #050505;
    box-shadow: 0 0 5px rgb(87, 87, 87);
    cursor: pointer;
}

.buttons {
    display: flex;
    align-items: center;
    justify-content: center;
}

.log{
width: 100%;
background-color: rgb(0, 0, 0);
}

@media only screen and (max-width:300px){
    .half {
        display: flex;
        flex-direction: column;
    }

    .image-2 {
        height: 30rem;
    }
}
</style>