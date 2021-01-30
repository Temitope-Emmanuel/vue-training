<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="display Name"
      v-model="displayName"
    />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <p class="error">{{ error }}</p>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { defineComponent, ref } from "vue";
import useSignup from "../composable/useSignup";
export default defineComponent({
  name: "Login",
  setup(props, context) {
    const email = ref("");
    const password = ref("");
    const displayName = ref("");
    const { error, signup } = useSignup();

    const handleSubmit = async () => {
      await signup({
        email: email.value,
        password: password.value,
        displayName: displayName.value
      });
      if (!error.value) {
        context.emit("goToChat");
      }
    };

    return { email, password, displayName, handleSubmit, error };
  }
});
</script>

<style></style>
