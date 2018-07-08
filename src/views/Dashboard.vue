<template>
  <div class="dashboard">
    <h1>DASHBOARD</h1>
    {{this.$route.query}}
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'dashboard',
  created() {
    const { firebaseToken } = this.$route.query;
    const config = {
      apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
      authDomain: `${process.env.VUE_APP_FIREBASE_APP}.firebaseapp.com`,
      databaseURL: `https://${process.env.VUE_APP_FIREBASE_APP}.firebaseio.com`,
      projectId: process.env.VUE_APP_FIREBASE_APP,
      storageBucket: `${process.env.VUE_APP_FIREBASE_APP}.appspot.com`,
      messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING,
    };
    firebase.initializeApp(config);
    firebase
      .auth()
      .signInWithCustomToken(firebaseToken)
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style scoped lang="scss">
</style>
