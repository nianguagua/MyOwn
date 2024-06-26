import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsView from "../views/ProductsView.vue";
import JianZhu from "../views/JianZhu.vue";
import ChanPin from "../views/ChanPin.vue";
import NewsView from "../views/NewsView.vue";
import TuanduiView from "../views/TuanduiView.vue";
import ChanyeNews from "../views/ChanyeNews.vue";
import GongsiNews from "../views/GongsiNews.vue";
// import { usePermissionsStore } from "@/store/routeSet";
// const permissionsStore = usePermissionsStore();
let role1Route = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
    children: [
      {
        path: "jianzhu",
        component: JianZhu,
      },
      {
        path: "chanpin/:appId/:useId",
        component: ChanPin,
        // beforeEnter: (to, from) => {
        //   // return false;
        // },
      },
    ],
  },
  {
    path: "/news",
    name: "news",
    component: NewsView,
    children: [
      {
        path: "chanyeNews",
        component: ChanyeNews,
      },
      {
        path: " ",
        component: GongsiNews,
      },
    ],
  },
  {
    path: "/tuandui",
    name: "tuandui",
    component: TuanduiView,
  },
];
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: role1Route,
});

export default router;
