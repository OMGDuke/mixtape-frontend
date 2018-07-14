<template>
      <div class="playlist">
        <img class="playlist__cover" :src="getAlbumArt(playlist.images)"/>
      <p class="playlist__name">{{playlist.name}}</p>
      <p class="playlist__song-count">{{playlist.tracks.total}} Songs</p>
      </div>
</template>

<script>
export default {
  name: 'playlist',
  props: ['playlist'],
  methods: {
    getAlbumArt(images) {
      if (images[1]) {
        return images[1].url;
      } else if (images[0]) {
        return images[0].url;
      }
      return null;
    },
  },
};
</script>

<style scoped lang="scss">
.playlist {
  width: 45vw;
  max-width: 300px;
  &__cover {
    object-fit: cover;
    width: 45vw;
    max-width: 300px;
    height: 45vw;
    max-height: 300px;
  }
  &__name {
    font-family: HelveticaNeue;
    font-size: 24px;
    font-weight: 200;
    font-style: italic;
    letter-spacing: -0.4px;
    text-align: center;
    color: #ffffff;
    margin: 5px 0 0 0;
  }
  &__song-count {
    font-family: HelveticaNeue;
    font-size: 14px;
    font-weight: 200;
    font-style: italic;
    letter-spacing: -0.3px;
    text-align: center;
    color: #ffffff;
    margin: 5px 0 20px 0;
  }
}
</style>
