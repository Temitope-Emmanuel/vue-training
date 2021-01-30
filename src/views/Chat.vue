<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Navbar from "../component/Navbar.vue";
import NewChatForm from "../component/NewChatForm.vue";
import ChatWindow from "../component/ChatWindow.vue";
export default defineComponent({
  name: "Chat",
  components: { Navbar, NewChatForm, ChatWindow }
});
</script>

<style></style>
