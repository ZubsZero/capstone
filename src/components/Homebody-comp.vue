<template>
  <div class="template">
    <div class="header-card">
      <div class="body">
        <h1 class="top-heading">Top sales of Week</h1>
      </div>
    </div>

    <div class="cards">
      <div class="card1">
        <div class="card-image">
          <img
            src="https://i.postimg.cc/bNbLWJ3X/CAZ101-AL-FT8052-0913-removebg-preview.png"
            alt="watch"
            class="image"
          />
        </div>
        <div class="card-info">
          <div class="headings">
            <p class="h1">Tag Heuer</p>
            <p class="price">R300</p>
            <div class="btns">
              <button class="btn">View More</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card2">
        <div class="card-image">
          <img
            src="https://i.postimg.cc/5tJBZSjL/g-shock-ga-2100-1adr-removebg-preview.png"
            alt="watch"
            class="image"
          />
        </div>
        <div class="card-info">
          <div class="headings">
            <p class="h1">Casio G-Shock</p>
            <p class="price">R300</p>
            <div class="btns">
              <button class="btn">View More</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card3">
        <div class="card-image">
          <img
            src="https://i.postimg.cc/s2fcMJyy/fossil-men-s-fossil-blue-three-hand-date-stainless-steel-watch-fs6013-removebg-preview.png"
            alt="watch"
            class="image"
          />
        </div>
        <div class="card-info">
          <div class="headings">
            <p class="h1">Fossil</p>
            <p class="price">R300</p>
            <div class="btns">
              <button class="btn">View More</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card4">
        <div class="card-image">
          <img
            src="https://i.postimg.cc/g2VRqL4J/Seiko-Presage-Petrol-Blue-Style-60s-Road-Trip-GMT-removebg-preview.png"
            alt="watch"
            class="image"
          />
        </div>
        <div class="card-info">
          <div class="headings">
            <p class="h1">Seiko</p>
            <p class="price">R300</p>
            <div class="btns">
              <button class="btn">View More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cinzel&display=swap");

.image {
  width: 12rem;
  height: 12rem;
  margin: 1rem;
}

.header-card {
  width: 30rem;
  height: 35rem;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 500px black inset;
}

.top-heading {
  padding-top: 16rem;
  font-family: "Cinzel", serif;
  color: rgb(0, 0, 0);
}

.template {
  display: flex;
  gap: 5rem;
}

.btn {
  background-color: rgb(255, 255, 255);
  color: black;
  font-family: "Cinzel", serif;
}

.card1,
.card2,
.card3,
.card4 {
  width: 30rem;
  height: 15rem;
  border: 1px solid rgb(255, 255, 255);
  box-shadow: 0 0 2px rgb(255, 255, 255);
}

.card2,
.card4 {
  margin-left: 1rem;
}

.cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin: 2rem;
}

.card-info {
  position: relative;
  bottom: 100%;
  height: 15rem;
  width: 30rem;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.card1:hover .image {
  transition: 0.5s;
  transform: scale(1.1);
  filter: brightness(0.25);
}
.card2:hover .image {
  transition: 0.5s;
  transform: scale(1.1);
  filter: brightness(0.25);
}
.card3:hover .image {
  transition: 0.5s;
  transform: scale(1.1);
  filter: brightness(0.25);
}
.card4:hover .image {
  transition: 0.5s;
  transform: scale(1.1);
  filter: brightness(0.25);
}

.headings {
  margin-top: 5rem;
}
.card2:hover .card-info {
  opacity: 1;
}
.card3:hover .card-info {
  opacity: 1;
}
.card4:hover .card-info {
  opacity: 1;
}
.card1:hover .card-info {
  opacity: 1;
}

.btn:hover {
  transition: 0.5s;
  background-color: black;
  border: 0.3px solid rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  box-shadow: 0 0 5px golden rod;
}
.card-info p {
  color: white;
  font-size: 20px;
  text-align: center;
  font-family: "Cinzel", serif;
}
</style>
