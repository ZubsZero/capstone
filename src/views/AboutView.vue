<template>
  <NavBar/>
  <abouthero/>
  <div class="about">
    <div class="company">
      <div class="text">
        <h1>About the company</h1>
        <hr>
        <p>
WatchTime is a renowned wristwatch company synonymous with precision and elegance. With a rich heritage of crafting exquisite timepieces, they blend traditional craftsmanship with cutting-edge technology. Their watches epitomize sophistication, appealing to those who appreciate both form and function, making WatchTime a symbol of timeless style and reliability.</p>
      </div>
      <div class="img">
        <img src="https://i.postimg.cc/wM40cT8k/artur-luczka-jc9a-N8dtsu-M-unsplash.jpg" alt="" class="image">
      </div>
    </div>

    <div class="customers">
      <div class="text">
        <h1>About the customers</h1>
        <hr>
        <p>WatchTime's clientele comprises discerning individuals who appreciate the finer things in life. These customers are connoisseurs of horology, valuing not only impeccable timekeeping but also the artistry behind each timepiece. They range from watch collectors and enthusiasts to professionals who seek both luxury and performance, uniting under the banner of WatchTime's exquisite craftsmanship.</p>
      </div>
      <div class="img">
        <img src="https://i.postimg.cc/x8TWT0zS/salman-sidheek-HVU2-Jqi-Dc-Ec-unsplash.jpg" alt="" class="image2">
      </div>

    </div>
    <div class="Founder">
      <div class="text">
        <h1>About the Founder</h1>
        <hr>
        <p>
Zubair Matthee, the visionary founder of WatchTime, is a luminary in the world of horology. With an unwavering passion for precision engineering and an innate sense of aesthetics, he embarked on a journey to redefine watchmaking. His entrepreneurial spirit and dedication to excellence have been the driving force behind WatchTime's rise to prominence. Zubair Matthee's commitment to innovation and his keen eye for design continue to shape the company's legacy, ensuring that every timepiece bearing the WatchTime name is a testament to his enduring vision.</p>
      </div>
      <div class="img">
        <img src="https://i.postimg.cc/3xLnjgVm/C12-Zubair-Matthee-removebg-preview.png" alt="" class="image3">
      </div>


    </div>
  </div>
  <Footer/>
</template>
<script>
import abouthero from '@/components/AboutHeroComp.vue'
import NavBar from '@/components/Navbar-comp.vue'
import Footer from '@/components/footer-comp.vue'
export default {
components: {
  abouthero,
  NavBar,
  Footer
}

}

</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Monoton&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cinzel&display=swap");

.company,.Founder,.customers {
display: flex;
height: 40rem;
background-color: rgb(0, 0, 0);
gap: 30rem;
}

.Founder{
  margin-top: 9rem;
}

.customers{
  margin-top: 5rem;
}
.text {
margin-left: 4rem;
padding-top: 4rem;
font-family: "Cinzel", serif;
color: white;

}

.image {
  width: 33rem;
  height: 25rem;

}

.image2 {
  width: 33rem;
  height: 25rem;
  margin-right: 4rem;

}

.image3 {
  width: 20rem;
  height: 25rem;
  margin-right: 6rem;
}

@media only screen and (max-width:300px) {
  .company,.Founder,.customers {
display: flex;
flex-direction: column-reverse;
height: 54rem;
background-color: rgb(0, 0, 0);
gap: 0rem;
}

.image {
  width: 100%;
  height: 15rem;

}

.image2 {
  width: 100%;
  height: 25rem;
  margin-right: 0rem;

}

.image3 {
  width: 100%;
  height: 25rem;
  margin-right: 0rem;
}

.text {
margin-left: 0rem;
padding-top: 4rem;
font-family: "Cinzel", serif;
color: white;

}
}
</style>