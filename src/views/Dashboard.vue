<template>
  <div class="dashboard">
    <h1 class="strong-text">My Mixtapes</h1>
    <div class="mixtapes">
      <template v-for="tape in tapes">
        <router-link :key="tape['.key']" class="mixtape__link" :to="'mixtape/' + tape['.key']"><MixtapePanel :mixtape="tape"/></router-link>
      </template>
    </div>
    <router-link to="choose-playlist">
      <RoundButton title="Create New" :action="()=>{}" />
    </router-link>
  </div>
</template>

<script>
import RoundButton from '@/components/RoundButton.vue';
import MixtapePanel from '@/components/MixtapePanel.vue';
import { db, base } from '@/firebase';

export default {
  name: 'dashboard',
  created() {
    this.getMixtapes();
  },
  components: {
    RoundButton,
    MixtapePanel
  },
  firebase() {
    const userId = base.auth().currentUser.uid;
    let tapes = {
      source: db
        .ref('tapes')
        .orderByChild('uid')
        .equalTo(userId)
    };
    return { tapes };
  },
  methods: {
    getMixtapes() {},
    createNew() {
      return this.$router.push({ path: 'choosePlaylist' });
    }
  }
};
</script>

<style scoped lang="scss">
.mixtape__link {
  text-decoration: none;
}
.mixtapes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  justify-content: space-around;
}
</style>
