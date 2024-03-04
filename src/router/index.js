import { createRouter, createWebHistory } from 'vue-router';
// import Vue from "vue";
// import VueRouter from "vue-router";
import Menu from '../components/Menu.vue';
import Home from '../components/Home.vue';
import BookTable from '../components/BookTable.vue';

// Define route components
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/menu', name: 'Menu', component: Menu },
  { path: '/book-a-table', name: 'BookTable', component: BookTable },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;

// Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home,
//   },
//   {
//     path: "/menu",
//     name: "Menu",
//     component: AboutView,
//   },
//   {
//     path: "/book-a-table",
//     name: "BookTable",
//     component: BookTable,
//   },
// ];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
// });

// export default router;