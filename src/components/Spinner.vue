<template>
  <div class="spinner"></div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Spinner"
});
</script>

<style>
.spinner {
  display: block;
  width: 40px;
  height: 40px;
  margin: 30px auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: #ff8800;
  animation: spin 1s ease infinite;
}
@keyframes spin {
  to {
    transform: rotateZ(360deg);
  }
}
</style>
