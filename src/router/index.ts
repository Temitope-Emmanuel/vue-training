import { createRouter, createWebHistory, NavigationGuard } from "vue-router";
import Welcome from "../views/Welcome.vue";
import ChatRoom from "../views/Chat.vue";
import { projectAuth } from "@/firebase/config";

//
const requiredAuth: NavigationGuard = (to, from, next) => {
  const user = projectAuth.currentUser;
  if (!user) {
    next({ name: "Welcome" });
  } else {
    next();
  }
};

const AuthRequired: NavigationGuard = (to, from, next) => {
  const user = projectAuth.currentUser;
  if (user) {
    next({ name: "ChatRoom" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/chat-room",
    name: "ChatRoom",
    component: ChatRoom,
    beforeEnter: requiredAuth
  },
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    props: true,
    beforeEnter: AuthRequired
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
