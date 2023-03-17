import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import PoliticsPage from "../views/PoliticsPage.vue";
import EconomicPage from "../views/EconomicPage.vue";
import SportPage from "../views/SportPage.vue";
import TravelPage from "../views/TravelPage.vue";
import VlogsPage from "../views/VlogsPage.vue";
import HealthPage from "../views/HealthPage.vue";
import DetailsNews from "../views/DetailsNews.vue";
import AuthPage from "../views/AuthPage.vue";

const routes = [
  {
    path: "/",
    name: "AuthPage",
    component: AuthPage,
  },
  {
    path: "/homePage",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/travel",
    name: "TravelPage",
    component: TravelPage,
  },
  {
    path: "/health",
    name: "HealthPage",
    component: HealthPage,
  },
  {
    path: "/details",
    name: "DetailsNews",
    component: DetailsNews,
  },
  {
    path: "/vlogs",
    name: "VlogsPage",
    component: VlogsPage,
  },
  {
    path: "/sport",
    name: "SportPage",
    component: SportPage,
  },
  {
    path: "/politics",
    name: "PoliticsPage",
    component: PoliticsPage,
  },
  {
    path: "/Economic",
    name: "EconomicPage",
    component: EconomicPage,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
