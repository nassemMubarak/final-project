import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import PoliticsPage from "../views/PoliticsPage.vue";
import EconomicPage from "../views/EconomicPage.vue";
import SportPage from "../views/SportPage.vue";
import DetailsNews from "../views/DetailsNews.vue";
import AuthPage from "../views/AuthPage.vue";
import OurTeam from "../views/OurTeam.vue";
import LoadingPage from "../views/LoadingPage.vue";

const routes = [
  {
    path: "/",
    name: "LoadingPage",
    component: LoadingPage,
  },
  {
    path: "/authPage",
    name: "AuthPage",
    component: AuthPage,
  },
  {
    path: "/homePage",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/details",
    name: "DetailsNews",
    component: DetailsNews,
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
    path: "/ourTeam",
    name: "OurTeam",
    component: OurTeam,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
