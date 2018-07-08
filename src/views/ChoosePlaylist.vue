<template>
  <div class="dashboard">
    <h1>Choose a Playlist</h1>
    <template v-for="playlist in this.playlists">
      <p v-bind:key="playlist.id">{{playlist.name}}</p>
    </template>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'dashboard',
  data() {
    return {
      playlists: [],
    };
  },
  created() {
    this.getPlaylists('https://api.spotify.com/v1/me/playlists');
  },
  methods: {
    getPlaylists(url) {
      axios
        .get(url, {
          headers: { Authorization: `Bearer ${this.$route.query.access_token}` },
        })
        .then((res) => {
          this.playlists.push(...res.data.items);
          console.log(res.data);
        });
    },
  },
};
</script>

<style scoped lang="scss">
</style>
