<template>
  <div class="dashboard">
    <h1>DASHBOARD</h1>
    {{this.$route.query}}
  </div>
</template>

<script>
import firebase from 'firebase';
import firebaseConfig from '../assets/firebase-config.json';

export default {
  name: 'dashboard',
  created() {
    const { firebaseToken } = this.$route.query;
    const config = firebaseConfig;
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
