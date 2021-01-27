<template>
  <form @submit.prevent="handleSubmit">
    <label for="Title">Title</label>
    <input type="text" name="Title" v-model="title" id="Title" required />
    <label for="Details">Details</label>
    <textarea name="Details" v-model="details" id="Details" required></textarea>
    <button :disabled="title.length < 4">Add Project</button>
  </form>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      title: "",
      details: ""
    };
  },
  methods: {
    handleSubmit() {
      const project = {
        title: this.title,
        details: this.details,
        complete: false,
        id: Math.floor(Math.random() * 1000)
      };
      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...project })
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch(err => console.log(err));
    }
  }
});
</script>

<style>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>
