<template>
  <div class="playlist">
    <img class="song__image" :src="song.art"/>
    <p class="song__title">{{song.title}}</p>
    <p class="song__artist">{{song.artist}}</p>
  </div>
</template>

<script>
export default {
  name: 'song',
  props: ['song']
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
