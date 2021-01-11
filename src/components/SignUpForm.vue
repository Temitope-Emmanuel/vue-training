<template>
  <form @submit.prevent="handleSubmit">
    <label for="email"> Email: </label>
    <input id="email" type="email" v-model="email" required />

    <label for="password"> Password: </label>
    <input id="password" type="password" v-model="password" required />
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <label for="username"> Username: </label>
    <input id="username" type="text" v-model="username" required />

    <label for="role">
      Role:
    </label>
    <select id="role" v-model="role">
      <option value="Developer">Web Developer</option>
      <option value="Designer">Web Designer</option>
    </select>
    <label for="skill">Skills (press alt + comma to add):</label>
    <input type="text" v-model="tempSkill" @keyup.alt="addSkill" />
    <div v-for="skill in skills" :key="skill" class="pill">
      <span @click="removeSkill(skill)">
        {{ skill }}
      </span>
    </div>
    <div class="terms">
      <input type="checkbox" id="terms" v-model="terms" required />
      <label for="terms">Accept terms and condition</label>
    </div>
    <div>
      <input type="checkbox" value="Temitope" v-model="names" />
      <label>Temitope</label>
    </div>
    <div>
      <input type="checkbox" value="Emmanuel" v-model="names" />
      <label>Emmanuel</label>
    </div>
    <div>
      <input type="checkbox" value="Ojo" v-model="names" />
      <label>Ojo</label>
    </div>
    <div class="submit">
      <button>
        Create An account
      </button>
    </div>
  </form>

  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Username: {{ username }}</p>
  <p>Your role: {{ role }}</p>
  <p>Terms accepted: {{ terms }}</p>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "SignUpForm",
  data() {
    return {
      email: "",
      password: "",
      passwordError: "",
      username: "",
      tempSkill: "",
      terms: false,
      skills: [],
      names: [],
      role: ""
    };
  },
  methods: {
    handleSubmit() {
      this.passwordError =
        this.password.length > 6
          ? ""
          : "Password must be at leas 6 characters longs";
      if (!this.passwordError) {
        alert(
          JSON.stringify(
            {
              email: this.email,
              password: this.password,
              role: this.role,
              terms: this.terms,
              username: this.username,
              ...this.skills
            },
            null,
            2
          )
        );
      }
    },
    addSkill(e) {
      if (this.tempSkill && !this.skills.includes(this.tempSkill)) {
        this.skills.push(this.tempSkill);
        this.tempSkill = "";
      }
    },
    removeSkill(e) {
      this.skills = this.skills.filter(item => item !== e);
    }
  }
});
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
