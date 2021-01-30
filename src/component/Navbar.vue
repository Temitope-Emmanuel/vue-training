<template>
  <nav v-if="user">
    <div>
      <p>Hey There</p>
      <p class="email">Currently Logged in as {{ user.displayName }}</p>
    </div>
    <p class="error">{{ error }}</p>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>
import { defineComponent, watch } from "vue";
import useLogout from "../composable/useLogout";
import getUser from "../composable/getUser";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Navbar",
  setup() {
    const { error, logout } = useLogout();
    const router = useRouter();
    const { user } = getUser();
    watch(user, user => {
      if (!user) {
        router.push("/");
      }
    });
    return { error, logout, user };
  }
});
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
