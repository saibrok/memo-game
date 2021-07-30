import Vue from 'vue';
import VueRouter from 'vue-router';
import Game from '@/views/Game.vue';
import Table from '@/views/Table.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    name: 'catchAll',
    component: Game,
  },
  {
    path: '/',
    name: 'Game',
    component: Game,
  },
  {
    path: '/table',
    name: 'Table',
    component: Table,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
