<template>
  <div class="dashboard">
    <h2>CODE: {{this.$route.params.code}}</h2>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'dashboard',
  created() {
    console.log(this.$route.params.code);
    const url = 'https://api.spotify.com';
    const request = '/v1/me/playlists';
    const Authorization = 'Bearer ' + this.$route.params.code;
    const instance = axios.create({
      baseURL: url,
      timeout: 1000,
      headers: {
        Authorization,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });

    instance.get(request).then(console.log);
  }
};
</script>

<style scoped lang="scss">
</style>
