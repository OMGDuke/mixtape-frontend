<template>
  <div class="home">
    <img class="tape" src="../assets/tape-white.jpg">
    <h2 class="strong-text">More than a Playlist</h2>
    <p class="body-text">Mixtape lets you build digital mixtapes to share with friends and loved ones using Spotify.</p>
    <RoundButton title="Login" v-bind:action="login" v-bind:icon="['fab', 'spotify']" icon-color="#1ed760"/>
  </div>
</template>

<script>
import RoundButton from "@/components/RoundButton";
export default {
  name: "home",
  components: {
    RoundButton
  },
  methods: {
    login() {
      console.log("LOGGING IN");
    }
  }
};
</script>

<style scoped lang="scss">
.tape {
  width: 50%;
  height: auto;
  margin: auto;
  margin-top: 90px;
}
</style>
