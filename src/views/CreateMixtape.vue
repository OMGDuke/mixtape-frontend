<template>
  <div class="choose-playlist">
   <h1 class="strong-text">Create Mixtape</h1>
   <template v-if="playlist">
    <form>
      <FormField label="Title" :placeholder="playlist.name"/>
      <FormField label="Description" placeholder="Enter a mixtape description" :value="playlist.description"/>
    </form>
  </template>
  </div>
</template>

<script>
import axios from 'axios';
import FormField from '../components/FormField.vue';

export default {
  name: 'createMixtape',
  props: ['playlistId', 'userId'],
  components: {
    FormField,
  },
  data() {
    return {
      playlist: null,
    };
  },
  created() {
    this.getPlaylist();
  },
  methods: {
    getPlaylist() {
      const url = `https://api.spotify.com/v1/users/${this.userId}/playlists/${
        this.playlistId
      }`;
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${window.sessionStorage.getItem('spotifyToken')}`,
          },
        })
        .then((res) => {
          this.playlist = res.data;
          console.log(this.playlist.description);
        });
    },
  },
};
</script>

<style scoped lang="scss">
</style>
