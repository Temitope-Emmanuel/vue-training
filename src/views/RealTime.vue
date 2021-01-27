<template>
  <h1>Real time</h1>
  <PostList :posts="posts" />
</template>

<script>
import { projectFireStore } from "@/firebase/config";
import { defineComponent, ref } from "vue";
import PostList from "../components/PostList";
export default defineComponent({
  name: "RealTime",
  components: { PostList },
  setup() {
    const posts = ref([]);

    projectFireStore
      .collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot(({ docs }) => {
        const allPosts = docs.map(item => ({
          ...item.data(),
          id: item.id
        }));
        posts.value = allPosts;
      });
    return { posts };
  }
});
</script>

<style></style>
