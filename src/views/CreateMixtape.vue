<template>
  <div class="choose-playlist">
   <h1 class="strong-text">Create Mixtape</h1>
   <button v-on:click="submit">CLICK</button>
   <template v-if="mixtape">
    <form>
      <FormField label="Title" v-model="mixtape.title" :default="mixtape.title"/>
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
import { db, base } from '@/firebase';
import FormField from '../components/FormField.vue';
import Song from '../components/Song.vue';

export default {
  name: 'createMixtape',
  props: ['playlistId', 'userId'],
  components: {
    FormField,
    Song
  },
  firebase: () => {
    const tapes = db.ref('tapes');
    return { tapes };
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
    submit() {
      let tape = {};
      this.mixtape.uid = base.auth().currentUser.uid;
      tape[base.auth().currentUser.uid] = this.mixtape;
      console.log(this.mixtape.uid);
      this.$firebaseRefs.tapes.set(tape);
    },
    getArtists(artists) {
      return artists
        .map(artist => {
          return artist.name;
        })
        .join(', ');
    },
    getAlbumArt(images) {
      if (images[1]) {
        return images[1].url;
      } else if (images[0]) {
        return images[0].url;
      }
      return null;
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
          this.mixtape.id = res.data.id;
          this.mixtape.title = res.data.name;
          this.mixtape.description = res.data.description;
          this.mixtape.songs = res.data.tracks.items.map(song => {
            return {
              id: song.track.id,
              artist: this.getArtists(song.track.artists),
              art: this.getAlbumArt(song.track.album.images),
              title: song.track.name,
              reason: ''
            };
          });
        });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
