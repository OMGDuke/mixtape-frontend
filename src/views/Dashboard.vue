<template>
  <div class="dashboard">
    <h1 class="strong-text">My Mixtapes</h1>
    <router-link to="choose-playlist">
      <RoundButton title="Create New" :action="()=>{}" />
    </router-link>
  </div>
</template>

<script>
import RoundButton from '@/components/RoundButton.vue';

export default {
  name: 'dashboard',
  created() {
    this.getMixtapes();
  },
  components: {
    RoundButton,
  },
  methods: {
    getMixtapes() {},
    createNew() {
      return this.$router.push({ path: 'choosePlaylist' });
    },
  },
};
</script>

<style scoped lang="scss">
</style>
