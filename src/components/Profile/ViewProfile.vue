<template>
  <div class="view-profile container">
    <div class="card">
      <h2 class="deep-purple-text center">User's Wall</h2>
    </div>
  </div>
</template>


<script>
import db from "../../../Firebase/init";

export default {
  name: "ViewProfile",
  data() {
    return {
      profile: null
    };
  },

  created() {
    let ref = db.collection("users");
  }
};
</script>


<style>
</style>
