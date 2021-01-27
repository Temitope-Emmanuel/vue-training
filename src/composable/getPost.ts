import { ref } from "vue";
import { projectFireStore } from "../firebase/config";

const getPost = (postId: string) => {
  const post = ref({});
  const error = ref("");
  const load = async () => {
    try {
      await new Promise(resolve => {
        setTimeout(resolve, 2000);
      });
      const response = await projectFireStore
        .collection("posts")
        .doc(postId)
        .get();
      if (!response.exists) {
        throw Error("Post does not exist");
      } else {
        post.value = {
          ...response.data(),
          id: response.id
        };
      }
    } catch (err) {
      error.value = err;
    }
  };
  return { post, error, load };
};
export default getPost;
