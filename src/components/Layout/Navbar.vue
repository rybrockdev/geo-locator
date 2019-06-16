<template>
  <div class="navbar">
    <nav class="deep-purple darken-1">
      <div class="container">
        <router-link :to="{name: 'GMap' }" class="brand-logo left">Geo-Locator</router-link>
        <ul class="right">
          <li v-if="!user">
            <router-link :to="{name: 'Signup' }">Sign-Up</router-link>
          </li>
          <li v-if="!user">
            <router-link :to="{ name: 'Login' }">Login</router-link>
          </li>
          <li v-if="user">
            <a>{{ user.email }}</a>
          </li>
          <li v-if="user">
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
    return {
      user: null
    };
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
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }
};
</script>

<style>
.navbar .title {
  font-size: 2.4em;
}
</style>

