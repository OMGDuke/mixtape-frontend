<template>
  <div class="choose-playlist">
   <h1 class="strong-text">Create Mixtape</h1>
   <button v-on:click="logList">CLICK</button>
   <template v-if="mixtape">
    <form>
      <FormField label="Title" v-model="mixtape.name" :default="mixtape.name"/>
      <FormField label="Description"
        v-model="mixtape.description"
        :default="mixtape.description"/>
        <template v-for="song in mixtape.songs">
          <div :key="song.id">
            <Song  :song="song"/>
            <FormField label="Reason" v-model="song.reason" placeholder="Why did you choose this song?"/>
          </div>
        </template>
    </form>
  </template>
  </div>
</template>

<script>
import axios from 'axios';
import FormField from '../components/FormField.vue';
import Song from '../components/Song.vue';

export default {
  name: 'createMixtape',
  props: ['playlistId', 'userId'],
  components: {
    FormField,
    Song
  },
  data() {
    return {
      mixtape: null
    };
  },
  created() {
    this.getPlaylist();
  },
  methods: {
    logList() {
      console.log(this.mixtape);
    },
    getPlaylist() {
      const url = `https://api.spotify.com/v1/users/${this.userId}/playlists/${
        this.playlistId
      }`;
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${window.sessionStorage.getItem(
              'spotifyToken'
            )}`
          }
        })
        .then(res => {
          this.mixtape = {};
          this.mixtape.title = res.data.name;
          this.mixtape.description = res.data.description;
          this.mixtape.songs = res.data.tracks.items.map(song => song);
          this.playlist = res.data;
        });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
