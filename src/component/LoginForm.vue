<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <button>Log in</button>
    <p class="error">{{ error }}</p>
  </form>
</template>

<script>
import { defineComponent, ref, watch, watchEffect } from "vue";
import useLogin from "../composable/useLogin";

export default defineComponent({
  name: "Login",
  setup(_, context) {
    const email = ref("");
    const password = ref("");

    const { error, login } = useLogin();

    const handleSubmit = async () => {
      await login({ email: email.value, password: password.value });
      if (!error.value) {
        context.emit("goToChat");
      }
    };

    return { email, password, handleSubmit, error };
  }
});
</script>

<style></style>
