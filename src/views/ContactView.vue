<template> 
    <div class="form">
      <form action="https://formspree.io/f/xzblrryk" method="POST">
        <div class="name-d">
          <label>
            <b>Your Name:</b> 
          </label>
          <div class="firstname">
                        <input type="text" name="name" class="name" />
                      </div>
         
        </div>
        <div class="surname-d">
          <label>
            <b>Your Surname:</b>
          </label>
          <div class="lastname">
                        <input type="text" name="surname" class="surname" />
                      </div>
          
        </div>
        <div class="email-d">
          <label>
            <b>Your Email:</b> 
          </label>
          <div class="input">
                        <input type="email" name="email" class="email" />
  
          </div>
         
        </div>
        <div class="reason-d">
          <label for="select"
            ><b>Reason for Contact:</b>
          </label>
          <div class="select">
             <select name="reason for contact" class="select">
              <option value="Service">Service</option>
              <option value="Feedback">Feedback</option>
              <option value="Complaint">Complaint</option>
            </select> 
          </div>
            
         
        </div>
        <div class="message-d">
          <label for="message" class="message"
            ><b>Your Message</b> 
          </label>
          <div class="textarea">  
                       <textarea name="message" class="textarea"></textarea>
   
          </div>
         
        </div>
  
        <!-- your other form fields go here -->
  
        <button type="submit" class="submit">Send</button>
      </form>
    </div>
  </template>
  <script></script>
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Monoton&display=swap");
  
  .hero {
    background-image: url("https://i.postimg.cc/7Zv5rJ2X/hassan-ouajbir-IYU-Ym-MRm7s-unsplash.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 40rem;
  }
  
  .hero-info {
    position: relative;
    top: 35%;
    right: 25%;
  }
  
  h1 {
    color: rgb(0, 0, 0);
    font-size: 3rem;
    font-family: "Monoton", cursive;
  }
  
  .yokohama {
    color: rgba(179, 16, 16, 0.9);
  }
  
  .sub-text {
    color: rgb(0, 0, 0);
    font-size: 1.3rem;
    font-family: "Julius Sans One", sans-serif;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3rem;
    gap: 3rem;
    font-family: "Julius Sans One", sans-serif;
  }
  
  textarea {
    width: 16rem;
    height: 2rem;
    border: none;
    border-bottom: 1.4px solid;
  }
  
  input {
    border: none;
    height: 2rem;
    border-bottom: 1.4px solid;
  }
  
  .submit {
    width: 12rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: black;
    color: #f8f8f8;
    font-family: "Julius Sans One", sans-serif;
  }
  
  option {
    font-family: "Julius Sans One", sans-serif;
  }
  
  select {
    font-family: "Julius Sans One", sans-serif;
  }
  
  .email {
    width: 14rem;
  }

  b {
    color: white;
  }
  
  .name-d {
      display: flex;
      flex-direction: column;
  }
  
  .submit:hover {
    transition: 0.4s;
    background-color: white;
    box-shadow: 0 0 20px black;
    color: black;
  }
  
  @media only screen and (max-width: 400px) {
    h1 {
      color: white;
      font-size: 1.9rem;
      font-family: "Monoton", cursive;
    }
    .hero-info {
      position: relative;
      top: 35%;
      right: 0%;
    }
  
    .hero {
      height: 30rem;
      background-position-x: -10rem;
    }
  
    input {
      background-color: transparent;
    }
  
    textarea {
      background-color: transparent;
    }
  }
  </style>
  