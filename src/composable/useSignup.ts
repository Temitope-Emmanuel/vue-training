import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);
interface SignUpArg {
  email: string;
  password: string;
  displayName: string;
}
const signup = async (signupArg: SignUpArg) => {
  error.value = null;
  try {
    const response = await projectAuth.createUserWithEmailAndPassword(
      signupArg.email,
      signupArg.password
    );
    if (!response) {
      throw new Error("Could not complete the signup");
    }
    await response.user?.updateProfile({ displayName: signupArg.displayName });
    error.value = null;
    return response;
  } catch (err) {
    error.value = err.message;
  }
};

const useSignup = () => ({ error, signup });

export default useSignup;
