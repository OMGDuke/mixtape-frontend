<template>
      <div class="mixtape">
        <img class="mixtape__cover" :src="mixtape.albumArt"/>
      <p class="mixtape__name">{{mixtape.title}}</p>
      <p class="mixtape__song-count">{{mixtape.songs.length}} Songs</p>
      </div>
</template>

<script>
export default {
  name: 'mixtapePanel',
  props: ['mixtape']
};
</script>

<style scoped lang="scss">
.mixtape {
  width: 45vw;
  max-width: 300px;
  &__cover {
    object-fit: cover;
    border-radius: 50%;
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
