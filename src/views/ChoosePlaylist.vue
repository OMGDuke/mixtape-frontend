<template>
  <div class="choose-playlist">
    <h1 class="strong-text">Choose a Playlist</h1>
    <div class="playlists">
    <template v-for="playlist in this.playlists">
      <router-link
        :to="{
          name: 'createMixtape',
          params: { playlistId: playlist.id, userId: playlist.owner.id }
        }"
        v-bind:key="playlist.id" class="playlist__link"
      >
        <PlaylistPanel :playlist="playlist" />
      </router-link>
    </template>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PlaylistPanel from '../components/PlaylistPanel.vue';

export default {
  name: 'choosePlaylist',
  components: {
    PlaylistPanel,
  },
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
          headers: {
            Authorization: `Bearer ${window.sessionStorage.getItem('spotifyToken')}`,
          },
        })
        .then((res) => {
          this.playlists.push(...res.data.items);
          if (this.playlists.length < res.data.total) {
            this.getPlaylists(res.data.next);
          }
        });
    },
  },
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
