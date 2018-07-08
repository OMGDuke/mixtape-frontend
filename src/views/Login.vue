<template>
  <div class="login">
    <font-awesome-icon class="icon fa-spin" icon="spinner" />
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

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
      const config = {
        apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
        authDomain: `${process.env.VUE_APP_FIREBASE_APP}.firebaseapp.com`,
        databaseURL: `https://${
          process.env.VUE_APP_FIREBASE_APP
        }.firebaseio.com`,
        projectId: process.env.VUE_APP_FIREBASE_APP,
        storageBucket: `${process.env.VUE_APP_FIREBASE_APP}.appspot.com`,
        messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING
      };
      firebase.initializeApp(config);
      firebase
        .auth()
        .signInWithCustomToken(firebaseToken)
        .then(() => {
          window.sessionStorage.setItem('firebaseToken', firebaseToken);
          window.sessionStorage.setItem(
            'spotifyToken',
            this.$route.query.access_token
          );
          return this.$router.push({ path: 'dashboard' });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
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
