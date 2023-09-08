<template>
  <section class="" style="background-color: #000000">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card" style="border-radius: 25px">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p class="text-center h1 mb-2 mx-1 mx-md-4 mt-2">Sign up</p>

                  <form class="mx-1 mx-md-4">
                    <div class="d-flex flex-row align-items-center mb-0">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-4">
                        <input
                          type="text"
                          id="form3Example1c"
                          class="form-control"
                          v-model="firstName"
                        />
                        <label class="form-label" for="form3Example1c"
                          >Your Name</label
                        >
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="email"
                          id="form3Example3c"
                          class="form-control"
                          v-model="email"
                        />
                        <label class="form-label" for="form3Example3c"
                          >Your Email</label
                        >
                      </div>
                    </div>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="form3Example4cd"
                          class="form-control"
                          v-model="UserName"
                        />
                        <label class="form-label" for="form3Example4cd"
                          >Username</label
                        >
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-0">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          id="form3Example4c"
                          class="form-control"
                          v-model="password"
                        />
                        <label class="form-label" for="form3Example4c"
                          >Password</label
                        >
                      </div>
                    </div>
                    <div class="form-check d-flex justify-content-center mb-5">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3c"
                      />
                      <label class="form-check-label" for="form2Example3">
                        I agree all statements in
                        <a href="#!">Terms of service</a>
                      </label>
                    </div>

                    <div
                      class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                    >
                      <button type="button" class="btn btn-primary btn-lg" @click="register">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                >
                  <img
                    src="https://i.postimg.cc/1z0VSJ5Z/3764936.jpg"
                    class="img-fluid"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {

    data() {
      return {
        firstName: "",
        lastName: "",
        email: "",
        Username: "",
        password: "",
      };
    },
    async register() {
      if (!this.validateForm()) {
        return;
      }

      const registrationInfo = {
        FirstName: this.FirstName,
        LastName: this.LastName,
        UserName: this.UserName,
        email: this.email,
        UserPwd: this.password,
      };

      try {
        const response = await fetch(
          "https://watchtime.onrender.com/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(registrationInfo),
          }
        );

        if (response.status !== 200) {
          throw new Error(
            `Server responded with status code: ${response.status}`
          );
        }

        const data = await response.json();

        if (data.token) {
          localStorage.setItem("authToken", data.token);
          this.setAuthenticated(true);
          // this.$router.push({ name: '/' });
          router.push("/");
        } else {
          this.errorMessage = data.message || "Error registering the user.";
        }
      } catch (error) {
        router.push("/login");
      }
    },
    validateForm() {
      if (!this.firstName || !this.lastName || !this.email || !this.password) {
        this.errorMessage = "Please fill in all required fields.";
        return false;
      }
  },

    }}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cinzel&display=swap");

label {
  font-family: "Cinzel", serif;
  color: white;
}

p {
  font-family: "Cinzel", serif;
  color: white;
}

input {
    font-family: "Cinzel", serif;
    color: black;
}

p {
  position: relative;
  bottom: 3%;
}

form {
  height: 34.1rem;
}
.card {
  background-color: black;
}
body {
  background-color: black !important;
}

.btn {
  color: white;
  background-color: black;
  border: 1px solid white;
  font-family: "Cinzel", serif;
}

.btn:hover {
  transition: 0.3s;
  transform: scaleX(1);
  box-shadow: 0 0 4px white;
  background-color: white;
  color: black;
}
</style>
