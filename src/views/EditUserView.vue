<template>
  <NavBar/>
  <div>
    <div class="edit-Div">
      <h1 class="h1">Edit</h1>
      <router-link to="/admin" class="head">
        <button class="button">Back</button>
      </router-link>
      <form @submit.prevent="editProduct" class="edit-form">
        <input type="text" v-model="edituser.Firstname" placeholder="Name" />
        <input type="text" v-model="edituser.Lastname" placeholder="Surname" />
        <input type="text" v-model="edituser.UserName" placeholder="Username" />
        <input type="text" v-model="edituser.email" placeholder="email" />
        <input type="text" v-model="edituser.UserPwd" placeholder="Password" />
        <input type="text" v-model="edituser.UserRole" placeholder="Role" />
        <button type="submit" class="btn">Save</button>
      </form>
    </div>
  </div>
  <br>
  <Footer/>
</template>

<script>
import NavBar from '../components/Navbar-comp.vue'
import Footer from '../components/footer-comp.vue'

export default {
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      edituser: {
        UserID: this.id,
        Firstname: "",
        Lastname: "",
        UserName: "",
        email: "",
        UserPwd: "",
        IsAdmin: "",
      },
    };
  },
  props: ["id"],
  methods: {
    async editProduct() {
      try {
        await this.$store.dispatch("SaveUser", this.edituser);

      console.log("User details updated successfully");

      } catch (error) {
        console.error("Error updating user details:", error);

      }
    },
  },
};
</script>
