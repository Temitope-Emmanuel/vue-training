<template>
  <div class="welcome container">
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @goToChat="goToChat" />
      Don't have an account <span @click="showLogin = false">Sign up Here</span>
    </div>
    <div v-else>
      <h2>Sign Up</h2>
      <SignUpForm @goToChat="goToChat" />
      <p>
        Already have an account
        <span @click="showLogin = true">Login Here</span>
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import SignUpForm from "../component/SignUpForm";
import LoginForm from "../component/LoginForm";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Welcome",
  components: { LoginForm, SignUpForm },
  setup() {
    const { push } = useRouter();
    const showLogin = ref(false);
    const goToChat = () => {
      console.log("redirection to goChat");
      push("/chat-room");
    };
    return { showLogin, goToChat };
  }
});
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
</style>
