<template>
  <div class="choose-playlist">
    <h1>Choose a Playlist</h1>
    <template v-for="playlist in this.playlists">
      <div v-bind:key="playlist.id">
      <img :src="playlist.images[1] ? playlist.images[1].url : null" />
      <p >{{playlist.name}}</p>
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'choosePlaylist',
  data() {
    return {
      playlists: []
    };
  },
  created() {
    this.getPlaylists('https://api.spotify.com/v1/me/playlists');
  },
  methods: {
    getPlaylists(url) {
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${window.sessionStorage.getItem(
              'spotifyToken'
            )}`
          }
        })
        .then(res => {
          this.playlists.push(...res.data.items);
          if (this.playlists.length < res.data.total) {
            this.getPlaylists(res.data.next);
          }
        });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
