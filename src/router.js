import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Dashboard from './views/Dashboard.vue';
import ChoosePlaylist from './views/ChoosePlaylist.vue';
import CreateMixtape from './views/CreateMixtape.vue';
import Mixtape from './views/Mixtape.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/choose-playlist',
      name: 'choosePlaylist',
      component: ChoosePlaylist,
    },
    {
      path: '/create-mixtape',
      name: 'createMixtape',
      component: CreateMixtape,
      props: true,
    },
    {
      path: '/mixtape/:id',
      name: 'mixtape',
      component: Mixtape,
    },
  ],
});
