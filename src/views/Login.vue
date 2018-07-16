<template>
  <div class="login">
    <font-awesome-icon class="icon fa-spin" icon="spinner" />
  </div>
</template>

<script>
import { base } from '@/firebase';

export default {
  name: 'login',
  created() {
    this.authenticate();
  },
  methods: {
    authenticate() {
      const { firebaseToken } = this.$route.query;
      if (!firebaseToken) {
        return this.$router.push({ name: 'home' });
      }

      base
        .auth()
        .signInWithCustomToken(firebaseToken)
        .then(() => {
          window.sessionStorage.setItem('firebaseToken', firebaseToken);
          window.sessionStorage.setItem(
            'spotifyToken',
            this.$route.query.access_token,
          );
          return this.$router.push({ path: 'dashboard' });
        })
        .catch((error) => {
          console.error(error);
        });
      return null;
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  position: absolute;
  font-size: 80px;
  margin: 0 auto;
  top: 50%;
  width: 100%;
  text-align: center;
}
</style>
