import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import AddProject from "../views/AddProject.vue";
import EditProject from "../views/EditProject.vue";
import Details from "../views/Details.vue";
import Create from "../views/Create.vue";
import Tags from "../views/Tag.vue";
import RealTime from "../views/RealTime.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  },
  {
    path: "/posts/:postId",
    name: "Detail",
    component: Details
  },
  {
    path: "/realTime",
    name: "RealTime",
    component: RealTime
  },
  {
    path: "/post/create",
    name: "Create",
    component: Create
  },
  {
    path: "/posts/tag/:tag",
    name: "Tag",
    component: Tags
  },
  {
    path: "/addProject",
    name: "AddProject",
    component: AddProject
  },
  {
    path: "/editProject/:id",
    name: "EditProject",
    component: EditProject
  },
  // // redirect
  {
    path: "/all-jobs",
    redirect: "/jobs"
  },
  // 404 catchall
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
