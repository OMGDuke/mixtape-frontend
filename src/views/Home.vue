<template>
  <div class="home">
    <img class="tape" src="../assets/tape-white.jpg">
    <h2 class="strong-text">More than a Playlist</h2>
    <p class="body-text">Mixtape lets you build digital mixtapes to share with
      friends and loved ones using Spotify.</p>
    <RoundButton title="Login" v-bind:action="login" v-bind:icon="['fab', 'spotify']"
      icon-color="#1ed760"/>
  </div>
</template>

<script>
import axios from 'axios';
import RoundButton from '@/components/RoundButton.vue';

export default {
  name: 'home',
  components: {
    RoundButton,
  },
  methods: {
    login() {
      axios
        .get(`${process.env.VUE_APP_API_ENDPOINT}/login`)
        .then((res) => {
          console.log(res.request.responseURL);
          window.location.href = res.request.responseURL;
        })
        .catch((error) => {
          console.log({ error });
        });
    },
  },
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
