<template>
  <h2></h2>
  <form @submit.prevent="updateProject">
    <label for="Title"></label>
    <input type="text" v-model="title" id="Title" />
    <label for="details">Details</label>
    <textarea v-model="details" id="" cols="30" rows="10"></textarea>
    <button @click="updatedProject">Update Project</button>
  </form>
</template>

<script>
import { defineComponent } from "vue";
export default {
  name: "EditProject",

  data() {
    return {
      uri: "",
      title: "",
      details: "",
      id: this.$route.params.id
    };
  },
  mounted() {
    this.uri = `http://localhost:3000/projects/${this.id}`;
    fetch(this.uri)
      .then(res => res.json())
      .then(data => {
        this.title = data.title;
        this.details = data.details;
      })
      .catch(err => console.log(err));
  },
  methods: {
    updateProject() {
      fetch(this.uri, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: this.title, details: this.details })
      })
        .then(() => {
          //   this.$emit("updatedProject", {
          //     id: this.id,
          //     title: this.title,
          //     details: this.details
          //   });
          this.$router.push("/");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style></style>
