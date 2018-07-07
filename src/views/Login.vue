<template>
  <div class="login">
  </div>
</template>

<script>
export default {
  name: 'login',
  created() {
    if (this.$route.query.code) {
      this.$router.push({
        name: 'dashboard',
        params: { code: this.$route.query.code },
      });
    }
  },
};
</script>

<style scoped lang="scss">
</style>
