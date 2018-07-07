<template>
  <div class="dashboard">
    <h2>CODE: {{this.$route.params.code}}</h2>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'dashboard',
  created() {
    console.log(this.$route.params);
  }
};
</script>

<style scoped lang="scss">
</style>
