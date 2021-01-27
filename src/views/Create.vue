<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label for="title">Title</label>
      <input type="text" id="title" v-model="title" required />
      <label for="details">Detail</label>
      <textarea name="" id="details" v-model="details"></textarea>
      <label for="tags">Tags (hit enter to add a tag)</label>
      <input
        @keydown.enter.prevent="addToTags"
        type="text"
        v-model="tag"
        name=""
        id="tags"
      />
      <div v-for="tag in tags" :key="tag" class="pill">#{{ tag }}</div>

      <button role="submit">Add Post</button>
    </form>
  </div>
</template>

<script>
import { defineComponent, ref, watch, watchEffect } from "vue";
import { projectFireStore, timeStamp } from "../firebase/config";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const title = ref("");
    const details = ref("");
    const tag = ref("");
    const tags = ref([]);
    const addToTags = () => {
      if (!tags.value.includes(tag.value)) {
        tags.value.push(tag.value.replace(/\s/g, ""));
      }
      tag.value = "";
    };
    const handleSubmit = async () => {
      try {
        const newPost = {
          title: title.value,
          details: details.value,
          tags: tags.value,
          createdAt: timeStamp()
        };
        const response = await projectFireStore
          .collection("posts")
          .add(newPost);
        router.push("/");
      } catch (err) {
        alert(err);
      }
    };
    return { title, details, tag, addToTags, tags, handleSubmit };
  }
});
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  background-color: #ff8800;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
