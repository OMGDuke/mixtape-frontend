<template>
  <div class="choose-playlist">
   <h1>{{playlist.name}}</h1>
  </div>
</template>

<script>
import axios from 'axios';
import PlaylistPanel from '../components/PlaylistPanel';

export default {
  name: 'createMixtape',
  components: {
    PlaylistPanel
  },
  props: ['playlist'],
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
.playlist__link {
  text-decoration: none;
}
.playlists {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  justify-content: space-around;
}
</style>
