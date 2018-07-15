<template>
  <div class="choose-playlist">
    <h1 class="strong-text">Mixtape</h1>
    {{tape.title}}
    {{tape.description}}
{{tape.albumArt}}

  </div>
</template>

<script>
import { db } from '@/firebase';
export default {
  name: 'mixtape',
  firebase() {
    const tape = {
      source: db.ref(`tapes/${this.$route.params.id}`),
      asObject: true,
      cancelCallback: function() {},
      readyCallback: function() {}
    };
    return { tape };
  }
};
</script>

<style scoped lang="scss">
</style>
