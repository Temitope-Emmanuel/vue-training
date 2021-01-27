import { ref } from "vue";
import { projectFireStore } from "../firebase/config";
const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      await new Promise(resolve => {
        setTimeout(resolve, 2000);
      });
      const response = await projectFireStore
        .collection("posts")
        .orderBy("createdAt", "desc")
        .get();
      const allPosts = response.docs.map(item => ({
        ...item.data(),
        id: item.id
      }));
      posts.value = allPosts as any;

      // if (response.) {
      //   posts.value = res;
      // } else {
      //   throw new Error("something is wrong with the response");
      // }
    } catch (err) {
      error.value = err;
    }
  };
  return { posts, error, load };
};

export default getPosts;
