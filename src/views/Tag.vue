<template>
  <div class="tag">
    <div v-if="getPostsError">{{ error }}</div>
    <div v-if="postWithTags.length" class="layout">
      <PostList :posts="postWithTags" />
      <TagCloud :tags="createdTags" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>
<script>
import { computed, defineComponent, watch, ref } from "vue";
import { useRoute } from "vue-router";
import PostList from "../components/PostList";
import Spinner from "../components/Spinner";
import getPosts from "../composable/getPosts";
import TagCloud from "../components/TagCloud";
import getAllTags from "../composable/getTags";

export default defineComponent({
  name: "Home",
  components: { PostList, Spinner, TagCloud },
  setup() {
    const router = useRoute();
    const { load: getAllPosts, error: getPostsError, posts } = getPosts();
    getAllPosts();
    const createdTags = ref([]);

    watch(posts, () => {
      const { tags } = getAllTags(posts);
      createdTags.value = [...tags.value];
    });
    const postWithTags = computed(() => {
      return posts.value.filter(item => item.tags.includes(router.params.tag));
    });

    return { postWithTags, getPostsError, createdTags };
  }
});
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
