// 11, Router
import { createWebHistory, createRouter } from "vue-router";
import Form from "@/components/HelloWorld.vue";
import List from "@/components/listingThings.vue";
import Event from "@/components/eventComp.vue";

// The different routes
const routes = [
  {
    path: "/",
    name: "Form",
    component: Form,
  },
  {
    path: "/List",
    name: "List",
    component: List,
  },
  {
    path: "/Event",
    name: "Event",
    component: Event,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;