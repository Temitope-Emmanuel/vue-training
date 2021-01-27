<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id" class="">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from "./SinglePost";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PostList",
  components: { SinglePost },
  props: ["posts"]
});
</script>

<style></style>
