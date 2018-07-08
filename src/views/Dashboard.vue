<template>
  <div class="dashboard">
    <h2>CODE: {{this.$route.query.access_token}}</h2>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  created() {
    console.log(this.$route.query);
  },
};
</script>

<style scoped lang="scss">
</style>
