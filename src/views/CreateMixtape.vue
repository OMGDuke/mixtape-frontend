<template>
  <div class="choose-playlist">
   <h1 class="strong-text">Create Mixtape</h1>
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
        <RoundButton title="Save" :action="submit" />
    </form>
  </template>
  </div>
</template>

<script>
import axios from 'axios';
import { db, base } from '@/firebase';
import FormField from '../components/FormField.vue';
import Song from '../components/Song.vue';
import RoundButton from '../components/RoundButton.vue';

export default {
  name: 'createMixtape',
  props: ['playlistId', 'userId'],
  components: {
    FormField,
    Song,
    RoundButton,
  },
  firebase: () => {
    const tapes = db.ref('tapes');
    return { tapes };
  },
  data() {
    return {
      mixtape: null,
    };
  },
  created() {
    this.getPlaylist();
  },
  methods: {
    submit() {
      this.mixtape.uid = base.auth().currentUser.uid;
      this.$firebaseRefs.tapes.push(this.mixtape).then((res) => {
        const id = res.key;
        return this.$router.push({ path: `/mixtape/${id}` });
      });
    },
    getArtists(artists) {
      return artists
        .map(artist => artist.name)
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
    generateMixtape(res) {
      this.mixtape = {};
      console.log(res.data);
      this.mixtape.id = res.data.id;
      this.mixtape.title = res.data.name;
      this.mixtape.description = res.data.description;
      this.mixtape.albumArt = this.getAlbumArt(res.data.images);
      this.mixtape.songs = res.data.tracks.items.map(song => ({
        id: song.track.id,
        artist: this.getArtists(song.track.artists),
        art: this.getAlbumArt(song.track.album.images),
        title: song.track.name,
        reason: '',
      }));
    },
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
        .then(this.generateMixtape);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
