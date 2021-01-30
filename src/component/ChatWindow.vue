<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="formattedDocuments" class="messages" ref="refMessages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
        <img
          v-if="doc.isOwner"
          @click="handleDelete(doc.id)"
          src="../assets/delete_forever-black-18dp.svg"
        />
      </div>
    </div>
    <div v-else>
      <p>:( No Available Messages</p>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, onUpdated, ref } from "vue";
import { formatDistanceToNow } from "date-fns";
import getCollection from "@/composable/getCollection";
import getUser from "@/composable/getUser";
import removeMessage from "@/composable/deleteDocument";
export default defineComponent({
  name: "ChatWindow",
  setup() {
    const { error, document } = getCollection("messages");
    const { user } = getUser();
    const refMessages = ref(null);
    const { removeDocument, error: deleteError } = removeMessage();

    const formattedDocuments = computed(() => {
      if (document.value) {
        return document.value.map(item => ({
          ...item,
          createdAt: formatDistanceToNow(item.createdAt.toDate()),
          isOwner: user.value.email === item.email
        }));
      } else {
        return [];
      }
    });
    onUpdated(() => {
      refMessages.value.scrollTop = refMessages.value.scrollHeight;
    });
    const handleDelete = async id => {
      await removeDocument({ collection: "messages", docId: id });
    };

    return { error, formattedDocuments, handleDelete, refMessages };
  }
});
</script>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
.messages img {
  margin: auto initial;
}
</style>
