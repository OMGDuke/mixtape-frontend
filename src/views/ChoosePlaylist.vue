<template>
  <div class="choose-playlist">
    <h1>Choose a Playlist</h1>
    <template v-for="playlist in this.playlists">
      <div v-bind:key="playlist.id" class="playlist">
        <div class="album__container">
          <div class="album__cover" v-bind:style="{ backgroundImage: `url('${getAlbumArt(playlist.images)}')` }" />
        </div>
      <p >{{playlist.name}}</p>
      <p >{{playlist.tracks.total}} Songs</p>
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
    },
    getAlbumArt(images) {
      return images[1] ? images[1].url : images[0] ? images[0].url : null;
    }
  }
};
</script>

<style scoped lang="scss">
.playlist {
  flex: 1;
  flex-direction: horizontal;
  width: 45vw;
  margin: 0;
}
.album {
  &__cover {
    width: 45vw;
    height: 45vw;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
