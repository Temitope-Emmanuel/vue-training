<template>
  <SignUpForm />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SignUpForm from "./components/SignUpForm.vue";

export default defineComponent({
  name: "App",
  components: {
    SignUpForm
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
