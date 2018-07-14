<template>
  <div class="playlist">
    <img class="song__image" :src="getAlbumArt(song.track.album.images)"/>
    <p class="song__title">{{song.track.name}}</p>
    <p class="song__artist">{{getArtists(song.track.artists)}}</p>
  </div>
</template>

<script>
export default {
  name: 'song',
  props: ['song'],
  methods: {
    getAlbumArt(images) {
      if (images[1]) {
        return images[1].url;
      } else if (images[0]) {
        return images[0].url;
      }
      return null;
    },
    getArtists(artists) {
      return artists
        .map(artist => {
          return artist.name;
        })
        .join(', ');
    }
  }
};
</script>

<style scoped lang="scss">
.song {
  &__image {
    margin-top: 60px;
  }
  &__title {
    font-family: HelveticaNeue;
    font-size: 24px;
    font-weight: 200;
    font-style: italic;
    letter-spacing: -0.5px;
    color: #bbbbbb;
    margin: 13px;
  }
  &__artist {
    font-family: HelveticaNeue;
    font-size: 24px;
    font-weight: 200;
    font-style: italic;
    letter-spacing: -0.5px;
    color: #1ed760;
    margin: 0 0 13px 0;
  }
}
</style>
