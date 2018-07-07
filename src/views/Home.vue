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
  created() {
    console.log(process.env);
  },
  methods: {
    login() {
      const baseUrl =
        "https://accounts.spotify.com/authorize/?response_type=code";
      const clientId = `&client_id=${process.env.VUE_APP_SPOTIFY_CLIENT_ID}`;
      const redirectUrl = `&redirect_uri=http://localhost:8080/login`;
      const scope = `&scope=user-read-private%20user-read-email`;
      const url = baseUrl + clientId + redirectUrl + scope;
      window.location.href = url;
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
