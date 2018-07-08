<template>
  <div class="dashboard">
    <h1 class="strong-text">My Mixtapes</h1>
           <RoundButton title="Create New" v-bind:action="createNew" />
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
      this.$router.push({ path: 'chooseplaylist' });
    },
  },
};
</script>

<style scoped lang="scss">
</style>
