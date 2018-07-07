<template>
  <div class="login">
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'login',
  created() {
    if (this.$route.query.code) {
      axios
        .post('http://localhost:8000/auth', {
          code: this.$route.query.code
        })
        .then(console.log);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
