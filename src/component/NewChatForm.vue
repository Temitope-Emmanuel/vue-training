<template>
  <form>
    <textarea
      @keypress.enter.prevent="handleSubmit"
      ref="textAreaRef"
      placeholder="Type a message and hit enter to send..."
      v-model="message"
    >
    </textarea>
    <div v-if="error" class="error">{{ error }} blah</div>
  </form>
</template>

<script>
import getUser from "@/composable/getUser";
import { timeStamp } from "@/firebase/config";
import { defineComponent, onMounted, onUnmounted, onUpdated, ref } from "vue";
import useCollections from "@/composable/useCollection";

export default defineComponent({
  name: "NewChatForm",
  setup() {
    const { user } = getUser();
    const textAreaRef = ref(null);
    const { addDocs, error } = useCollections("messages");

    const message = ref("");

    const handleSubmit = async () => {
      const newChat = {
        name: user.value.displayName,
        email: user.value.email,
        message: message.value,
        createdAt: timeStamp()
      };
      await addDocs(newChat);
      if (!error.value) {
        message.value = "";
      }
    };

    onMounted(() => {
      textAreaRef.value.focus();
    });

    return { message, handleSubmit, error, textAreaRef };
  }
});
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
.error {
  text-align: center;
  color: #ff2a58;
  font-size: 12px;
  padding: 10px 0;
}
</style>
