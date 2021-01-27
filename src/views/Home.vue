<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :tags="createdTags" />
    </div>
    <Spinner v-else />
  </div>
</template>

<script>
import { defineComponent, watch, ref } from "vue";
import getPosts from "../composable/getPosts";
import PostList from "../components/PostList";
import Spinner from "../components/Spinner";
import getAllTags from "../composable/getTags";
import TagCloud from "../components/TagCloud";
export default defineComponent({
  name: "Home",
  components: { PostList, Spinner, TagCloud },
  setup() {
    const { posts, error, load } = getPosts();
    const createdTags = ref([]);
    watch(posts, () => {
      const { tags } = getAllTags(posts);
      createdTags.value = [...tags.value];
    });

    load();
    return { posts, error, createdTags };
  }
});
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
