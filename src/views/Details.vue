<template>
  <h3>Details</h3>
  <div v-if="error">{{ error }}</div>
  <div v-if="post.title" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.details }}</p>
    <button @click="handleDelete">Delete Post</button>
  </div>
  <Spinner v-else />
</template>

<script>
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import getPost from "../composable/getPost";
import Spinner from "../components/Spinner";
import { projectFireStore } from "@/firebase/config";
export default defineComponent({
  name: "Details",
  components: { Spinner },
  setup() {
    const { params } = useRoute();
    const router = useRouter();
    const { post, error, load } = getPost(params.postId);
    load();
    const handleDelete = async () => {
      const response = await projectFireStore
        .collection("posts")
        .doc(params.postId)
        .delete();
      console.log(response);
      router.push("/");
    };
    return { post, error, handleDelete };
  }
});
</script>
<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5rem;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>
