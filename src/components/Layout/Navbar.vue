<template>
  <div class="navbar">
    <nav class="deep-purple darken-1">
      <div class="container">
        <router-link :to="{name: 'GMap' }">Geo-Locator</router-link>
        <ul class="right">
          <li>
            <router-link :to="{name: 'Signup' }">Sign-Up</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Login' }">Login</router-link>
          </li>
          <li>
            <a @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>



<script>
import firebase from "firebase";

export default {
  name: "Navbar",
  data() {
    return {};
  },

  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    }
  }
};
</script>

<style>
.navbar .title {
  font-size: 2.4em;
}
</style>

